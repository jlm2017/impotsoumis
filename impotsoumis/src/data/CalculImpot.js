import SeriesForBareme from './SeriesForBareme'
import BaremeActuel from './BaremeActuel'

const CalculImpot = function (sal_net, retraite, alloc_cho, couple, nbenf) {
    var Param_Legislatif = {
        "tx_sal_CSG": 0.075,
        "txd_sal_CSG": 0.051,
        "abat_sal_CSG": 0.0175,
        "planch_abatpro": 36,
        "abat_pro_ret": 0.1,
        "plaf_abatpro": 1024,
        "plaf_QF": 126,
        "plaf_decote_celib": 129,
        "plaf_decote_couple": 213,
        "tx_decote": 0.75,
        "seuil_recouv": 5
    };
    var sal_brut = Math.round(sal_net * 1.2);

    var nbparts_couple = (couple === 0)
        ? 1 * (nbenf >= 1
            ? 1
            : 0) + 0.5 * (nbenf === 2
                ? 1
                : 0)
        : 0.5 * Math.min(nbenf, 2);

    var nbparts = 1 + couple + nbparts_couple + Math.max(nbenf - 2, 0)

    var CSG_TauxPlein_CRDS_Salarie = (Param_Legislatif.tx_sal_CSG + 0.005) * sal_brut * 0.9825;
    CSG_TauxPlein_CRDS_Salarie = Math.round(CSG_TauxPlein_CRDS_Salarie)
    //B15


    var CSG_Deductible_Salarie = Math.round(Param_Legislatif.txd_sal_CSG * sal_brut * 0.9825);
    CSG_Deductible_Salarie = Math.round(CSG_Deductible_Salarie)


    var Revenu_Declare_Salarie = sal_net;

    Revenu_Declare_Salarie += CSG_TauxPlein_CRDS_Salarie;

    Revenu_Declare_Salarie -= CSG_Deductible_Salarie;


    Revenu_Declare_Salarie = Math.round(Revenu_Declare_Salarie)

    var RFR_Salarie = Math.round(Revenu_Declare_Salarie - Math.min(Math.max(Param_Legislatif.planch_abatpro, Param_Legislatif.abat_pro_ret * Revenu_Declare_Salarie), Param_Legislatif.plaf_abatpro));
    RFR_Salarie = Math.round(RFR_Salarie)


    var Rvn_Imposable_par_PF = Math.round(RFR_Salarie / nbparts);
    // A21

    var Rvn_Imposable_par_PF_sans_QF = (couple === 1)
        ? Math.round(RFR_Salarie / 2.0)
        : Math.round(RFR_Salarie);
    // B21

    var Sommes_par_Tranche_avec_QF = SeriesForBareme(Rvn_Imposable_par_PF, BaremeActuel)

    var Impot_avt_Decote_avec_QF_par_PF = 0;

    for (var serie of Sommes_par_Tranche_avec_QF) {
        Impot_avt_Decote_avec_QF_par_PF += serie.value;
    }

    // C21

    //var Sommes_par_Tranche_sans_QF = SeriesForBareme(Rvn_Imposable_par_PF_sans_QF, BaremeActuel)

    // D21
    var b21 = Rvn_Imposable_par_PF_sans_QF
    var d21 = 0;
    var series = SeriesForBareme(b21, BaremeActuel)
    for (var b21serie of series) {
        d21 += b21serie.value
    }


    var Impot_avt_Decote_sans_QF_par_PF = d21;

    // E21
    var Mnt_Depassement_Plafond_QF = ((Impot_avt_Decote_sans_QF_par_PF * (1 + couple) - Impot_avt_Decote_avec_QF_par_PF * nbparts) >= (Param_Legislatif.plaf_QF * 2 * (nbparts - (1 + couple))))
        ? (Impot_avt_Decote_sans_QF_par_PF * (1 + couple) - Impot_avt_Decote_avec_QF_par_PF * nbparts)
        : 0;

    // F21
    var impot_total_avant_decote_Plafond_QF = Impot_avt_Decote_avec_QF_par_PF * nbparts + Mnt_Depassement_Plafond_QF;


    var calculDecoteCelib = Param_Legislatif.tx_decote * (Param_Legislatif.plaf_decote_celib - impot_total_avant_decote_Plafond_QF);

    var calculDecoteCouple = Param_Legislatif.tx_decote * (Param_Legislatif.plaf_decote_couple - impot_total_avant_decote_Plafond_QF);

    var decoteSansCouple = Math.max(0, calculDecoteCelib);
    var decoteAvecCouple = Math.max(0, calculDecoteCouple);

    var decote = couple
        ? decoteAvecCouple
        : decoteSansCouple;
    // G21

    var soustraction = impot_total_avant_decote_Plafond_QF - decote;
    var impotDu = soustraction >= Param_Legislatif.seuil_recouv
        ? soustraction
        : 0;

    return { 'IR': impotDu, 'CSG': CSG_TauxPlein_CRDS_Salarie };

}

export default CalculImpot
