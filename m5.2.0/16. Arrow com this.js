const obj = {
    name: "Teste",

    // Arrow function NÃO cria seu próprio this
    sayThisArrow: () => {
        console.log("Arrow this:", this);
    },

    // Função tradicional usa o this do objeto
    sayThisNormal() {
        console.log("Normal this:", this);
    }
};

obj.sayThisArrow();
obj.sayThisNormal();
