import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { CategoryPage } from "./pages/AllCategory/allCategory";
import { Product } from "./pages/Product/Product";
import dell from './assets/images/Dell XPS 13.jpg';
import MacBook from './assets/images/macbook.png';
import hp from './assets/images/Laptop.png';
import acer from './assets/images/Accer.png';
import dell2 from './assets/images/Dell.png';
import hp2 from './assets/images/HP-removebg-preview.png';
import smartphone from "./assets/images/smartphones.png"
import smartwatches from "./assets/images/SW.png"
import keyboard from "./assets/images/keyboard.gif"
import mouse from "./assets/images/muse-argb.gif"
import headphone from "./assets/images/csq.png"
import { Authentificating } from "./pages/Authentificating/Authentificating";

export const App = () => {
  let [cart, setCart] = useState([])
  let [online, setOnline] = useState(false)
  let [onlineUser, setOnlineUser] = useState({})
  let [theProduct, setTheProduct] = useState({
    productIMG: null,
    ProductTittle: null,
    productText: null,
    productPrice: null
  })

  class Products {
    constructor(name, description, price, type, imgSrc) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.type = type;
      this.imgSrc = imgSrc;
    }
  }

  let tabAllProducts = [
    // laptops
    new Products("Dell XPS 13", "Sleek design, Intel Core i5, 8GB RAM, 256GB SSD.", 1099.99, "Laptop", dell),
    new Products("MacBook Air", "Apple M1 chip, 8GB RAM, 256GB SSD, Retina display.", 999.00, "Laptop", MacBook),
    new Products("HP Spectre x360", "13.3-inch touchscreen, Intel Core i7, 16GB RAM, 512GB SSD.", 1299.99, "Laptop", hp),
    new Products("Lenovo ThinkPad X1 Carbon", "Intel Core i7, 16GB RAM, 512GB SSD, 14-inch display.", 1399.00, "Laptop", hp2),
    new Products("Asus ZenBook 14", "AMD Ryzen 7, 16GB RAM, 1TB SSD, NVIDIA GeForce MX450.", 1299.00, "Laptop", dell2),
    new Products("Acer Swift 5", "Intel Core i5, 8GB RAM, 512GB SSD, 14-inch touchscreen.", 899.99, "Laptop", acer),
    new Products("Razer Blade 15", "Intel Core i7, 16GB RAM, 1TB SSD, NVIDIA RTX 3070.", 2499.99, "Laptop", dell),
    new Products("LG Gram 17", "Intel Core i7, 16GB RAM, 1TB SSD, 17-inch WQXGA display.", 1699.99, "Laptop", dell),
    new Products("Alienware m15 R5", "AMD Ryzen 9, 32GB RAM, 1TB SSD, NVIDIA RTX 3080.", 2799.99, "Laptop", dell),
    new Products("MSI GS66 Stealth", "Intel Core i9, 32GB RAM, 2TB SSD, NVIDIA RTX 3080.", 3299.00, "Laptop", dell),
    new Products("Lenovo Legion 7i", "Intel Core i9, 32GB RAM, 1TB SSD, NVIDIA RTX 3080.", 2699.99, "Laptop", dell),
    new Products("Gigabyte Aero 15 OLED", "Intel Core i7, 16GB RAM, 512GB SSD, NVIDIA RTX 3070.", 2099.00, "Laptop", dell),
    new Products("HP Envy x360", "AMD Ryzen 7, 16GB RAM, 512GB SSD, 15.6-inch touchscreen.", 1199.99, "Laptop", dell),
    // phones
    new Products("iPhone 13 Pro", "Apple A15 Bionic, 128GB storage, 6.1-inch Super Retina XDR display.", 999.00, "Phone", "https://evotrading.ma/wp-content/uploads/2021/09/apple-iphone-13-pro-1-to-graphite.png"),
    new Products("Samsung Galaxy S21", "Exynos 2100, 128GB storage, 6.2-inch Dynamic AMOLED 2X display.", 799.00, "Phone", "https://images.samsung.com/is/image/samsung/p6pim/n_africa/galaxy-s21/gallery/n-africa-galaxy-s21-5g-g991-sm-g991bzagmwd-359207689"),
    new Products("Google Pixel 6", "Google Tensor, 128GB storage, 6.4-inch OLED display.", 699.00, "Phone", "https://cdn.dxomark.com/wp-content/uploads/drafts/post-103489/Google-Pixel-6-featured-image-packshot-review-Recovered.jpg"),
    new Products("OnePlus 9 Pro", "Snapdragon 888, 256GB storage, 6.7-inch Fluid AMOLED display.", 899.00, "Phone", "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9-pro/Morning%20mist-gallery.png"),
    new Products("Xiaomi Mi 11", "Snapdragon 888, 128GB storage, 6.81-inch AMOLED display.", 749.99, "Phone", "https://rightech.ma/3909-large_default/xiaomi-mi-11-5g-256-go-mi11256.webp"),
    new Products("Sony Xperia 1 III", "Snapdragon 888, 256GB storage, 6.5-inch 4K HDR OLED display.", 1299.00, "Phone", "https://micromagma.ma/media/k2/items/cache/c6eeebd737a5e5374f8c323bdcdd4661_XL.jpg"),
    new Products("Oppo Find X3 Pro", "Snapdragon 888, 256GB storage, 6.7-inch AMOLED display.", 1099.99, "Phone", "https://micromagma.ma/media/k2/items/cache/ef6a5694b41f414e89f337f41ba8e32d_XL.jpg"),
    new Products("Realme GT", "Snapdragon 888, 128GB storage, 6.43-inch Super AMOLED display.", 499.00, "Phone", smartphone),
    new Products("Asus Zenfone 8", "Snapdragon 888, 256GB storage, 5.9-inch Super AMOLED display.", 699.00, "Phone", smartphone),
    new Products("Motorola Edge 20 Pro", "Snapdragon 870, 256GB storage, 6.7-inch AMOLED display.", 699.99, "Phone", smartphone),
    new Products("Nokia X20", "Snapdragon 480, 128GB storage, 6.67-inch IPS LCD display.", 349.00, "Phone", smartphone),
    new Products("Vivo X60 Pro", "Exynos 1080, 256GB storage, 6.56-inch AMOLED display.", 799.00, "Phone", smartphone),
    new Products("LG Velvet 5G", "Snapdragon 765G, 128GB storage, 6.8-inch OLED display.", 549.00, "Phone", smartphone),
    new Products("BlackBerry Key2", "Snapdragon 660, 64GB storage, 4.5-inch IPS LCD display.", 399.99, "Phone", smartphone),
    new Products("Huawei P40 Pro", "Kirin 990, 256GB storage, 6.58-inch OLED display.", 899.00, "Phone", smartphone),
    //Smart Devices
    new Products("Apple Watch Series 7", "Always-on Retina display, ECG app, GPS, and water-resistant.", 399.00, "Smart Devices", "https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg"),
    new Products("Amazon Echo Dot (4th Gen)", "Smart speaker with Alexa, improved sound, and fabric design.", 49.99, "Smart Devices", "https://www.bigw.com.au/medias/sys_master/images/images/h0f/h0f/26845145595934.jpg"),
    new Products("Fitbit Charge 4", "GPS, heart rate monitor,  notifications.", 129.95, "Smart Devices", "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/charge-5/images/desktop/features-cover-charge5-21.jpg"),
    new Products("Google Nest Hub (2nd Gen)", "Smart display with Google Assistant, Sleep Sensing, and Nest Cam.", 99.99, "Smart Devices", "https://tangerois.ma/18454-large_default/galaxy-watch-4-40mm-pink-gold-samsung.jpg"),
    new Products("Ring Video Doorbell 4", "HD video, two-way talk, advanced motion .", 199.00, "Smart Devices", "https://tangerois.ma/18454-large_default/galaxy-watch-4-40mm-pink-gold-samsung.jpg"),
    new Products("Garmin Venu 2", "AMOLED display, health and fitnessd sleep tracking.", 399.99, "Smart Devices", "https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_400,q_auto,w_400/c_pad,h_400,w_400/v1/Product_Images/en/productsProductss/010-02173-02/v/lf-lg-03a35ea1-333d-4c44-8b9d-e1490a0bec5b?pgw=1"),
    new Products("Wyze Cam v3", "Outdoor camera, color night vision, 2-way audio.", 35.98, "Smart Devices", "https://res.garmin.com/transform/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,h_400,q_auto,w_400/c_pad,h_400,w_400/v1/Product_Images/en/productsProductss/010-02173-02/v/lf-lg-03a35ea1-333d-4c44-8b9d-e1490a0bec5b?pgw=1"),
    new Products("Sony WH-1000XM4", "Noise-canceling headphones, touch controls, and 30-hour battery life.", 349.99, "Smart Devices", smartwatches),
    new Products("Google Nest Thermostat", "Smart thermostat with energy-saving features and remote control.", 129.00, "Smart Devices", smartwatches),
    new Products("Xiaomi Mi Smart Band 6", "Color AMOLED display, heart rate monitor, and 30 fitness modes.", 49.99, "Smart Devices", smartwatches),
    new Products("Ecovacs Deebot N8 Pro+", "Robot vacuum cleaner with advanced mapping and app control.", 449.99, "Smart Devices", smartwatches),
    new Products("Bose SoundLink Revolve+", "Portable Bluetooth speaker with 360.", 249.00, "Smart Devices", smartwatches),
    new Products("Nest Protect Smoke Alarm", "Smoke and CO alarm, smartphone alerts, and self-testing.", 119.00, "Smart Devices", smartwatches),
    new Products("Roku Streaming Stick+", "4K HDR streaming, voice remote, and 500,000+ movies and TV episodes.", 49.99, "Smart Devices", smartwatches),
    // Accessories
    new Products("Logitech G Pro Mechanical Keyboard", "RGB lighting, mechanical switches, and programmable keys.", 129.99, "Accessories", "https://www.ultrapc.ma/15902-large_default/logitech-g203-lightsync-noir-souris.jpg"),
    new Products("Razer DeathAdder V2 Gaming Mouse", "16,000 DPI, optical sensor, and customizable buttons.", 69.99, "Accessories", "https://mediazone.ma/uploads/images/products/12981/12981-OSJCeTqi.jpg"),
    new Products("Bose QuietComfort 35 II", "Wireless noise-canceling headphones with 20-hour battery life.", 299.00, "Accessories", "https://i5.walmartimages.com/asr/dd74d211-08b2-4acb-8323-74e4708505c0.572f30f710d13894cf94e56c56d82151.jpeg"),
    new Products("Apple AirPods Pro", "Active noise cancellation, wireless charging case, and sweat-resistant.", 249.00, "Accessories", "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg.news_app_ed.jpg"),
    new Products("SteelSeries Arctis Pro", "Lossless wireless audio, dual-wireless.", 329.99, "Accessories", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcfAWZxgf0OSb2PVOIknO4d3gdftLrJBJAw&usqp=CAU"),
    new Products("Corsair MM800 RGB Polaris", "Built-in LED lighting, , and USB passthrough.", 59.99, "Accessories", "https://m.media-amazon.com/images/S/aplus-media/vc/51109a38-558c-40d8-a428-1cccf1558786._CR664,0,800,600_PT0_SX600__.jpg"),
    new Products("HyperX Cloud II Gaming", "7.1 virtual surround sound, memory foam ear cups, and detachable mic.", 99.99, "Accessories", mouse),
    new Products("Logitech MX Master 3", "Wireless mouse, hyper-fast scrolling, and customizable buttons.", 99.99, "Accessories", keyboard),
    new Products("Sennheiser HD 660 S", "Open-back headphones, natural and balanced sound, and  design.", 499.95, "Accessories", headphone),
    new Products("Razer BlackWidow V3 Pro", "Wireless mechanical keyboard, Razer HyperSpeed, and 16.8 million colors.", 229.99, "Accessories", mouse),
    new Products("Microsoft Surface Arc Mouse", "Slim and lightweight , and smooth scrolling.", 79.99, "Accessories", keyboard),
    new Products("Corsair Virtuoso RGB Wireless", "High-fidelity audio, detachable mic, and plush memory foam earpads.", 179.99, "Accessories", headphone),
    new Products("Elgato Stream Deck", "15 customizable LCD keys, easy-to-use software,  control.", 149.99, "Accessories", mouse),
    new Products("Anker PowerCore 10000", "Portable charger, 10000mAh capacity, and high-speed charging.", 25.99, "Accessories", keyboard),
    new Products("Samsung T5 Portable SSD", "External SSD, 1TB capacity, and transfer speeds up to 540MB/s.", 129.99, "Accessories", headphone),

  ]
  

  return (
    <>
      <Routes>
        <Route path="/techno-land" element={<Home onlineUser={onlineUser} setOnlineUser={setOnlineUser} cart={cart} setCart={setCart} tabAllProducts={tabAllProducts} online={online} setOnline={setOnline} />} />
        <Route path="/Category/:category" element={<CategoryPage onlineUser={onlineUser} setOnlineUser={setOnlineUser} online={online} setOnline={setOnline} tabAllProducts={tabAllProducts} cart={cart} setCart={setCart} theProduct={theProduct} setTheProduct={setTheProduct} />} />
        <Route path="/Product/:id" element={<Product onlineUser={onlineUser} setOnlineUser={setOnlineUser} online={online} setOnline={setOnline} tabAllProducts={tabAllProducts} cart={cart} setCart={setCart} theProduct={theProduct} setTheProduct={setTheProduct} />} />
        <Route path="/Authentificating" element={<Authentificating onlineUser={onlineUser} setOnlineUser={setOnlineUser} online={online} setOnline={setOnline} tabAllProducts={tabAllProducts} cart={cart} setCart={setCart} theProduct={theProduct} setTheProduct={setTheProduct} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
