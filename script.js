




resumen.addEventListener("click" , () => {

    let cantidad =document.getElementById("cantidades")

    let cantidadIngresada= cantidad.value

    let categoria =document.getElementById("categoria")

    let categoriaIngresada= categoria.value


    let total= cantidadIngresada * 200 * categoriaIngresada

    console.log(total)
    console.log(categoriaIngresada)

    let pMensaje = document.createElement("div")
    pMensaje.textContent = total

    let divTotal = document.getElementById("totalAPagar")
    divTotal.appendChild(pMensaje)

    borrar.addEventListener("click" , () => {

        pMensaje.remove();
    
        
    }
    
    )
    
}

)


