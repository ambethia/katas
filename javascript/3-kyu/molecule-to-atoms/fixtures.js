// helper function, compares objects insensitive to field order
function equalsAtomically(obj1, obj2) {
    if (Object.keys(obj1).length == Object.keys(obj2).length) {
        for (var k in obj1) {
            if (obj1[k] != obj2[k]) return false;
        }
        return true;
    }
    return false;
}

Test.expect(equalsAtomically(parseMolecule("H2O"), {H: 2, O: 1}), "Should parse water");
Test.expect(equalsAtomically(parseMolecule("Mg(OH)2"), {Mg: 1, O: 2, H: 2}), "Should parse magnesium hydroxide: Mg(OH)2");
Test.expect(equalsAtomically(parseMolecule("K4[ON(SO3)2]2"), {K: 4, O: 14, N: 2, S: 4}), "Should parse Fremy's salt: K4[ON(SO3)2]2");