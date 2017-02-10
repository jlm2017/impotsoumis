import SeriesForBareme from './SeriesForBareme'
import BaremeActuel from './BaremeActuel'

const CalculImpot = function (sal_net, retraite, alloc_cho, couple, nbenf) {
    console.log("===========================")
    console.log("CalculImpot")
    console.log("Salaire NET")
    console.log(sal_net);

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
    console.log("B6");
    console.log(sal_brut);

    var nbparts_couple = (couple == 0)
        ? 1 * (nbenf >= 1
            ? 1
            : 0) + 0.5 * (nbenf == 2
            ? 1
            : 0)
        : 0.5 * Math.min(nbenf, 2);

    var nbparts = 1 + couple + nbparts_couple + Math.max(nbenf - 2, 0)
    console.log("D6");
    console.log("nb parts");
    console.log(nbparts);

    var CSG_TauxPlein_CRDS_Salarie = (Param_Legislatif.tx_sal_CSG + 0.005) * sal_brut * 0.9825;
    CSG_TauxPlein_CRDS_Salarie = Math.round(CSG_TauxPlein_CRDS_Salarie)
    //B15
    console.log("B15");
    console.log(CSG_TauxPlein_CRDS_Salarie);


    var CSG_Deductible_Salarie = Math.round(Param_Legislatif.txd_sal_CSG * sal_brut * 0.9825);
    CSG_Deductible_Salarie = Math.round(CSG_Deductible_Salarie)

    console.log("D15");
    console.log(CSG_Deductible_Salarie);

    console.log("Calcul E15");

    console.log("+sal net");
    var Revenu_Declare_Salarie = sal_net;
    console.log(Revenu_Declare_Salarie);

    console.log("- CSG_TauxPlein_CRDS_Salarie");
    Revenu_Declare_Salarie += CSG_TauxPlein_CRDS_Salarie;
    console.log(Revenu_Declare_Salarie);

    console.log("- CSG_Deductible_Salarie");
    Revenu_Declare_Salarie -= CSG_Deductible_Salarie;
    console.log(Revenu_Declare_Salarie);

    Revenu_Declare_Salarie = Math.round(Revenu_Declare_Salarie)

    console.log("E15");
    console.log(Revenu_Declare_Salarie);

    var RFR_Salarie = Math.round(Revenu_Declare_Salarie - Math.min(Math.max(Param_Legislatif.planch_abatpro, Param_Legislatif.abat_pro_ret * Revenu_Declare_Salarie), Param_Legislatif.plaf_abatpro));
    RFR_Salarie = Math.round(RFR_Salarie)

    console.log("F15");
    console.log(RFR_Salarie);

    var Rvn_Imposable_par_PF = Math.round(RFR_Salarie / nbparts);
    // A21
    console.log("A21");
    console.log(Rvn_Imposable_par_PF);

    var Rvn_Imposable_par_PF_sans_QF = (couple == 1)
        ? Math.round(RFR_Salarie / 2.0)
        : Math.round(RFR_Salarie);
    // B21
    console.log("B21");
    console.log(Rvn_Imposable_par_PF_sans_QF);

    var Sommes_par_Tranche_avec_QF = SeriesForBareme(Rvn_Imposable_par_PF, BaremeActuel)

    var Impot_avt_Decote_avec_QF_par_PF = 0;

    for (var serie of Sommes_par_Tranche_avec_QF) {
        Impot_avt_Decote_avec_QF_par_PF = Impot_avt_Decote_avec_QF_par_PF + serie.value;
    }

    // C21
    console.log("C21");
    console.log(Impot_avt_Decote_avec_QF_par_PF);

    var Sommes_par_Tranche_sans_QF = SeriesForBareme(Rvn_Imposable_par_PF_sans_QF, BaremeActuel)

    // D21
    var b21 = Rvn_Imposable_par_PF_sans_QF
    var d21 = 0;
    var series = SeriesForBareme(b21, BaremeActuel)
    for (var b21serie of series) {
        d21 += b21serie.value
    }

    console.log("D21");
    console.log(d21);

    var Impot_avt_Decote_sans_QF_par_PF = d21;

    // E21
    var Mnt_Depassement_Plafond_QF = ((Impot_avt_Decote_sans_QF_par_PF * (1 + couple) - Impot_avt_Decote_avec_QF_par_PF * nbparts) >= (Param_Legislatif.plaf_QF * 2 * (nbparts - (1 + couple))))
        ? (Impot_avt_Decote_sans_QF_par_PF * (1 + couple) - Impot_avt_Decote_avec_QF_par_PF * nbparts)
        : 0;
    console.log("E21");
    console.log(Mnt_Depassement_Plafond_QF);

    // F21
    var impot_total_avant_decote_Plafond_QF = Impot_avt_Decote_avec_QF_par_PF * nbparts + Mnt_Depassement_Plafond_QF;

    console.log("f21");
    console.log(impot_total_avant_decote_Plafond_QF);

    var calculDecoteCelib = Param_Legislatif.tx_decote * (Param_Legislatif.plaf_decote_celib - impot_total_avant_decote_Plafond_QF);

    var calculDecoteCouple = Param_Legislatif.tx_decote * (Param_Legislatif.plaf_decote_couple - impot_total_avant_decote_Plafond_QF);

    var decoteSansCouple = Math.max(0, calculDecoteCelib);
    var decoteAvecCouple = Math.max(0, calculDecoteCouple);

    var decote = couple
        ? decoteAvecCouple
        : decoteSansCouple;
    // G21
    console.log("g21");
    console.log(decote);

    var soustraction = impot_total_avant_decote_Plafond_QF - decote;
    var impotDu = soustraction >= Param_Legislatif.seuil_recouv
        ? soustraction
        : 0;

    return {'IR': impotDu, 'CSG': CSG_TauxPlein_CRDS_Salarie};

}

export default CalculImpot
