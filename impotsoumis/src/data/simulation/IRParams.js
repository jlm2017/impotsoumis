import CurrentCSG from './../legislative_parameters/CurrentCSG'
import CurrentIR from './../legislative_parameters/CurrentIR'

function _csg_tauxPlein_et_CRDS(sal_net, sal_brut, ret, alloc_cho, couple, nbparts) {
    var result = {
        "salarie": 0,
        "retraite": 0,
        "chomeur": 0
    }

    var tx_sal_CSG = CurrentCSG.salaries.tauxPlein.value

    var tx_ret_CSG = CurrentCSG.retraites.tauxPlein.value
    var plaf_txred_celib = CurrentCSG.retraites.seuil.taux.reduit.celibataire.value
    var plaf_exo_demip = CurrentCSG.retraites.seuil.exoneration.demiPartSupplentaire.value

    var plaf_txred_celib_chom = CurrentCSG.chomage.plafond.tauxReduit.celibataire.value
    var plaf_txred_part_chom = CurrentCSG.chomage.plafond.tauxReduit.parQuartSupplementaire.value
    var tx_chom_CSG = CurrentCSG.chomage.tauxPlein.value
    var plaf_abatchom = CurrentIR.plafond.abattement.chomage.value
    var abat_sal_CSG = CurrentCSG.salaries.abattement.fraisPro.value

    result.salarie = (tx_sal_CSG + 0.005) * sal_brut * 0.9825

    result.retraite = 0
    var revenusTotaux = sal_net + ret + alloc_cho

    if (revenusTotaux > (plaf_txred_celib + plaf_exo_demip * nbparts * 2)) {
        result.retraite = (tx_ret_CSG + 0.005) * ret
    }

    result.chomeur = 0

    if (revenusTotaux > plaf_txred_celib_chom + plaf_txred_part_chom * nbparts * 4) {
        result.chomeur = (tx_chom_CSG + 0.005) * alloc_cho * (1 - (alloc_cho < plaf_abatchom) * abat_sal_CSG)
    }

    return result
}

function IRParams(userParams) {
    var salaireNet = userParams.salaire.net.value
    var salaireBrut = userParams.salaire.brut.value
    var retraite = userParams.retraite.value
    var chomage = userParams.chomage.value
    var couple = userParams.couple.value
    var nbParts = userParams.nbPartsFiscales.value

    var csgTauxPlein = _csg_tauxPlein_et_CRDS(salaireNet, salaireBrut, retraite, chomage, couple, nbParts)

    return {
        "csg": {
            "taux": {
                "plein": {
                    "salarie": csgTauxPlein.salarie,
                    "retraite": csgTauxPlein.retraite,
                    "chomeur": csgTauxPlein.chomeur
                }
            }
        }
    }
}

export default IRParams;
