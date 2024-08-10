import './assets/scss/all.scss';
document.addEventListener('DOMContentLoaded', function() {
    const baseFileName = 'product-';
    const opticalImageUrls = [];
    const sunglassesImageUrls = [];

    // Optical 部分
    for (let i = 1; i <= 6; i++) {
        opticalImageUrls.push(`${baseFileName}${i}.png?raw=true`);
    }

    const optical_data = [];
    for (let i = 0; i < 12; i++) {
        const item = {
            "id": i,
            "name": "BJ41600S",
            "imgUrl": opticalImageUrls[i % opticalImageUrls.length], 
            "salePrice": "NTD3,490",
        };
        optical_data.push(item);
    }

    const optical_list = document.querySelector(".optical-product-list");
    let optical_str = '';

    optical_data.forEach(function(item) {
        optical_str += `<li class="product-card">
                    <img src="../assets/image/series-products/${item.imgUrl}" alt="${item.name}">
                    <div class="info"><h4>${item.name}</h4><span>${item.salePrice}</span></div>
                    <div class="pattern">
                      <div class="color-brown"></div>
                      <div class="color-orange"></div>
                    </div>
                  </li>`;
    });

    if (optical_list) {
        optical_list.innerHTML = optical_str;
    }

    // Sunglasses 部分
    for (let i = 1; i <= 6; i++) {
        sunglassesImageUrls.push(`${baseFileName}sunglasses-${i}.png?raw=true`);
    }

    const sunglasses_data = [];
    for (let i = 0; i < 6; i++) {
        const item = {
            "id": i,
            "name": "BJ41600S",
            "imgUrl": sunglassesImageUrls[i % sunglassesImageUrls.length], 
            "salePrice": "NTD3,490",
        };
        sunglasses_data.push(item);
    }

    const sunglasses_list = document.querySelector(".sunglasses-product-list");
    let sunglasses_str = '';

    sunglasses_data.forEach(function(item) {
        sunglasses_str += `<li class="product-card">
                    <img src="../assets/image/series-products/${item.imgUrl}" alt="${item.name}">
                    <div class="info"><h4>${item.name}</h4><span>${item.salePrice}</span></div>
                    <div class="pattern">
                      <div class="color-brown"></div>
                      <div class="color-orange"></div>
                    </div>
                  </li>`;
    });

    if (sunglasses_list) {
        sunglasses_list.innerHTML = sunglasses_str;
    }
});
