let map = L.map('map').setView([-15.488396, -70.167500], 8.5)

L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { foo: 'bar', attribution: '&copy; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' }).addTo(map);

//marcadores

//var marcador = L.marker([-15.72133, -70.70477], {
//draggable: true,
//title: "Presa Lagunillas",

//}).addTo(map).bindPopup("<h1>Presa Lagunillas</h1> <p> Reservorio Lagunillas 580 MM3 </p><img src='./img/presa.jpg'/> <a href='https://datastudio.google.com/u/2/reporting/3dc19c28-3194-448d-9bcd-fa0bc7b20a7a/page/qX5SC'target='blank'>Datos Aqui</a> <iframe width='600' height='500' src='https://datastudio.google.com/embed/reporting/8d756330-5145-4e50-a8cf-7db63867695b/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>");

var est_Lagunillas = L.marker([-15.722711, -70.705437], {
    draggable: true,
    title: "Estación Lagunillas",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/67e8dee6-1f90-4f39-8d82-bfdc9849d916/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_isla_soto = L.marker([-15.540833, -69.498889], {
    draggable: true,
    title: "Estación Isla Soto",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/268ab3d2-df5e-4462-a8c7-2572e05bf453/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_isla_taquile = L.marker([-15.766667, -69.683333], {
    draggable: true,
    title: "Estación Isla Taquile",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/e83f03e5-93b9-429c-b187-d2136ac2b80f/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Yanarico = L.marker([-15.754444, -70.295556], {
    draggable: true,
    title: "Estación Yanarico",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/a2d9cf4b-4e8f-4db3-ab26-475fadac3c72/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Nuñoa = L.marker([-14.482500, -70.620833], {
    draggable: true,
    title: "Estación Nuñoa",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/115ed056-757d-41b3-b1dd-ac80b503357d/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Pocoaque = L.marker([-16.380278, -69.285000], {
    draggable: true,
    title: "Estación Pocoaque",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/15a58504-609c-48bc-bb99-6f8db6d69b5c/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Yorohoco = L.marker([-16.565000, -69.320556], {
    draggable: true,
    title: "Estación Yorohoco",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/544aedc2-87ab-40cb-9151-ed49085d2b99/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Ichu = L.marker([-15.871944, -69.921111], {
    draggable: true,
    title: "Estación Ichu",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/9eb3558b-c5ee-42cb-a321-f85c66ac123f/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_PArboleda = L.marker([-16.416667, -69.166667], {
    draggable: true,
    title: "Estación Parco Arboleda",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/3ed2fd81-150f-46cf-b428-fee7288d01c4/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_PoBatalla = L.marker([-16.234167, -69.317778], {
    draggable: true,
    title: "Estación C.C. Pomata - Batalla",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/a1f8fc75-453f-4fdf-bad7-7d09afaabf05/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Piata = L.marker([-15.290278, -69.756667], {
    draggable: true,
    title: "Estación Piata",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/dea26364-7445-44d4-b37a-114aa86176da/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Cotaña = L.marker([-15.734083, -70.314278], {
    draggable: true,
    title: "Estación Cotaña",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/89c4d61a-47d3-4db0-8da8-9909e8479fdc/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Unocolla = L.marker([-15.439444, -70.195833], {
    draggable: true,
    title: "Estación Unocolla",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/c93b8109-7951-4940-9887-aa13607c9a7b/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });


var est_Caritamaya = L.marker([-15.996667, -69.753333], {
    draggable: true,
    title: "Estación Caritamaya",
}).addTo(map).bindPopup("<iframe width='800' height='400' src='https://datastudio.google.com/embed/reporting/d79be28c-f135-4386-b5f6-f9ae34eb178e/page/2qyHC' frameborder='0' style='border:0' allowfullscreen></iframe>", { maxWidth: "auto" });