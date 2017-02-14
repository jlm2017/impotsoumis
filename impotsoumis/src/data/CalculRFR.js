import SeriesForBareme from './SeriesForBareme'
import BaremeActuel from './BaremeActuel'
import ParamLegislatif from './ParamLegislatif'

const CalculRFR = function (sal_net, retraite, alloc_cho, couple, nbenf) {
	
    var sal_brut = Math.round(sal_net * 1.2);

    var nbparts_couple = (couple === 0)
        ? 1 * (nbenf >= 1
            ? 1
            : 0) + 0.5 * (nbenf === 2
                ? 1
                : 0)
        : 0.5 * Math.min(nbenf, 2);

    var nbparts = 1 + couple + nbparts_couple + Math.max(nbenf - 2, 0)

    var CSG_TauxPlein_CRDS_Salarie = (ParamLegislatif.tx_sal_CSG + 0.005) * sal_brut * 0.9825;
    CSG_TauxPlein_CRDS_Salarie = Math.round(CSG_TauxPlein_CRDS_Salarie)
    //B15


    var CSG_Deductible_Salarie = Math.round(ParamLegislatif.txd_sal_CSG * sal_brut * 0.9825);
    CSG_Deductible_Salarie = Math.round(CSG_Deductible_Salarie)


    var Revenu_Declare_Salarie = sal_net;

    Revenu_Declare_Salarie += CSG_TauxPlein_CRDS_Salarie;

    Revenu_Declare_Salarie -= CSG_Deductible_Salarie;


    Revenu_Declare_Salarie = Math.round(Revenu_Declare_Salarie)

    var RFR = Math.round(Revenu_Declare_Salarie - Math.min(Math.max(ParamLegislatif.planch_abatpro, ParamLegislatif.abat_pro_ret * Revenu_Declare_Salarie), ParamLegislatif.plaf_abatpro));
    RFR = Math.round(RFR)

	
		return { 'RFR': RFR};	
	
}

export default CalculRFR
