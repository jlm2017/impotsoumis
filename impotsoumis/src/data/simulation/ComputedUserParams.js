function _salaireMentuelBrutDuLoyer(sal_net) {
    return (sal_net < 15000) * (1 / 0.8) * sal_net + (15000 <= sal_net) * (sal_net < 30000) * (1 / 0.85) * sal_net + (sal_net >= 30000) * (1 / 0.9) * sal_net
}

function _nombreDePartsFiscales(couple, nbenf) {
    var nbPartsFiscales = 1 + couple;
    if (couple == 0) {
        nbPartsFiscales += 1 * (nbenf >= 1) + 0.5 * (nbenf == 2)
    } else {
        nbPartsFiscales += 0.5 * Math.min(nbenf, 2)
    }
    nbPartsFiscales += Math.max(nbenf - 2, 0)

    return nbPartsFiscales
}

function ComputedUserParams(net, couple, nbEnfants) {
    return {
        "salaireBrut": {
            "id": "sal_brut",
            "value": _salaireMentuelBrutDuLoyer(net)
        },
        "nbPartsFiscales": {
            "id": "nbparts",
            "value": _nombreDePartsFiscales(couple, nbEnfants)
        }
    }
}

export default ComputedUserParams;
