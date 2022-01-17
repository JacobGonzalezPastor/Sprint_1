const imp_products = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    let showproductsoferts = document.querySelector('#crd-container');
    let showproductspopular = document.querySelector('#crds-container');

    showproductsoferts.innerHTML = '';
    showproductspopular.innerHTML = '';

    data.forEach(product => {
        const { nombre, precio, porcentaje_descuento, imagen, descuento } = product
        const COP = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        })
        if(descuento == true){
            showproductsoferts.innerHTML += `
            <div class="card item" style="width: 18rem;">
            <div class="card-header desc">
            <p>${porcentaje_descuento * 100}% Dto.</p>
            </div>
            <img src="${imagen}" class="card-img-top" alt="no found" id="imagen">
            <div class="card-body">
            <p class="card-text" id="nombre">${nombre}</p>
            <p class="card-text" id="precio">${precio}</p>
            </div>
            <div>
                <button type="button" class="btn btn-primary buy">Comprar</button>
            </div>
            </div>
        `
        }if(descuento == false){
            showproductspopular.innerHTML += `
            <div class="card item" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top" alt="no found">
            <div class="card-body">
            <p class="card-text">${nombre}</p>
            <p class="card-text">${precio}</p>
            </div>
            <div><button type="button" class="btn btn-primary buy">Comprar</button>
            </div>
            </div>
            `
        }
        
    });
    console.log(data);
}

document.addEventListener('DOMContentLoaded', () => {
    imp_products('http://localhost:3000/productos')
});