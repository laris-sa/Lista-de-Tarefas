document.addEventListener("DOMContentLoaded", function() {
        const pendente = document.getElementById("pendente");
        const concluido = document.getElementById("concluido");

        pendente.addEventListener("change", function() {
            moveItem(pendente, concluido);
        });

        concluido.addEventListener("change", function() {
            moveItem(concluido, pendente);
        });

        function moveItem(sourceList, targetList) {
            const itemSelecionado = sourceList.selectedOptions[0];
            if (itemSelecionado) {
                targetList.appendChild(itemSelecionado);
            }
        }
    });
