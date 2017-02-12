import CurrentCSG from './../legislative_parameters/CurrentCSG'


function _csg_tauxPlein_et_CRDS(sal_brut) {
    var tx_sal_CSG = CurrentCSG.salaries.tauxPlein.value

    return (tx_sal_CSG + 0.005) * sal_brut * 0.9825
}

function IRParams(userParams) {
    return {
        "csg": {
            "taux": {
                "plein": {
                    "salarie": _csg_tauxPlein_et_CRDS(userParams.salaire.brut.value),
                    "retraite": 0,
                    "chomeur": 0
                }
            }
        }
    }
}

export default IRParams;
