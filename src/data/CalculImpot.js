function ImpotAvant(sal_net, retraite, alloc_cho, couple, nbenf, baremeList)  {

	var Param_Legislatif = {
				"tx_sal_CSG" : 0.075,
				"txd_sal_CSG" : 0.051,
				"abat_sal_CSG" : 0.0175,
				"planch_abatpro" : 36,
				"abat_pro_ret" : 0.1,
				"plaf_abatpro" : 1024,
				"plaf_QF" : 126
			};


	var sal_brut = sal_net * 1.2;

	var nbparts_couple = (couple==0)
												? 1 * (nbenf>=1 ? 1 : 0) + 0.5 * (nbenf==2 ? 1 : 0)
												: 0.5* Math.min(nbenf, 2);

	var nbparts = 1 + couple + nbparts_couple + Math.max(nbenf-2, 0)

	var CSG_TauxPlein_CRDS_Salarie = Math.round((Param_Legislatif.tx_sal_CSG + 0.005) * sal_brut * 0.9825);

	var CSG_Deductible_Salarie = Math.round(Param_Legislatif.txd_sal_CSG * sal_brut * 0.9825);

	var Revenu_Declare_Salarie = sal_net + CSG_TauxPlein_CRDS_Salarie - CSG_Deductible_Salarie;

	var RFR_Salarie = Math.round(Revenu_Declare_Salarie - Math.min(Math.max(Param_Legislatif.planch_abatpro, Param_Legislatif.abat_pro_ret * Revenu_Declare_Salarie), Param_Legislatif.plaf_abatpro));

	var Rvn_Imposable_par_PF = Math.round(RFR_Salarie / nbparts);

	var Rvn_Imposable_par_PF_sans_QF = (couple==1) ? Math.round(RFR_Salarie/2) : RFR_Salarie;

	var Sommes_par_Tranche_avec_QF = SeriesForBareme(Rvn_Imposable_par_PF, BaremeActuel)
	
	var Impot_avt_Decote_avec_QF_par_PF = 0;
	
	for (var serie of Sommes_par_Tranche_avec_QF) {
				Impot_avt_Decote_avec_QF_par_PF = Impot_avt_Decote_avec_QF_par_PF + serie.value;
	}
	
	var Sommes_par_Tranche_sans_QF = SeriesForBareme(Rvn_Imposable_par_PF_sans_QF, BaremeActuel)
	
	var Impot_avt_Decote_sans_QF_par_PF = 0;
	
	for (var serie of Sommes_par_Tranche_avec_QF) {
				Impot_avt_Decote_sans_QF_par_PF = Impot_avt_Decote_sans_QF_par_PF + serie.value;
	}

	var Mnt_Depassement_Plafond_QF = (Impot_avt_Decote_sans_QF_par_PF*(1+couple)-Impot_avt_Decote_avec_QF_par_PF*nbparts >= Param_Legislatif.plaf_QF*2*(nbparts-(1+couple))) 
		? Impot_avt_Decote_sans_QF_par_PF*(1+couple)-Impot_avt_Decote_avec_QF_par_PF*nbparts
		: 0;
	
}