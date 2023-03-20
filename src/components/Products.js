import ProductCard from "./ProductCard";
import bose1 from "../product_images/bose/bose_1.jpg";
import bose2 from "../product_images/bose/bose_2.jpg";
import bose3 from "../product_images/bose/bose_3.jpg";
import bose4 from "../product_images/bose/bose_4.jpg";
import dot1 from "../product_images/dot/dot_1.jpg";
import dot2 from "../product_images/dot/dot_2.jpg";
import dot3 from "../product_images/dot/dot_3.jpg";
import dot4 from "../product_images/dot/dot_4.jpg";
import gta1 from "../product_images/gta/gta_1.jpg";
import gta2 from "../product_images/gta/gta_2.jpg";
import gta3 from "../product_images/gta/gta_3.jpg";
import gta4 from "../product_images/gta/gta_4.jpg";
import gta5 from "../product_images/gta/gta_5.jpg";
import helmet1 from "../product_images/helmet/helmet_1.jpg";
import helmet2 from "../product_images/helmet/helmet_2.jpg";
import helmet3 from "../product_images/helmet/helmet_3.jpg";
import laptop1 from "../product_images/laptop/lenovo_1.jpg";
import laptop2 from "../product_images/laptop/lenovo_2.jpg";
import laptop3 from "../product_images/laptop/lenovo_3.jpg";
import laptop4 from "../product_images/laptop/lenovo_4.jpg";
import tv1 from "../product_images/tv/tv_1.jpg";
import tv2 from "../product_images/tv/tv_2.jpg";
import tv3 from "../product_images/tv/tv_3.jpg";
import tv4 from "../product_images/tv/tv_4.jpg";
export const PRODUCTS = [
    {
        id: 1,
        productName: 'Bose Headphones',
        productImageURL: [bose2, bose3, bose4],
        price: 25999,
        description: 'Bose Quietcomfort 45 Bluetooth Wireless Over Ear Headphones with Mic Noise Cancelling - Triple Black'
    },
    {
        id: 2,
        productName: 'Amazon dot',
        productImageURL: [dot1, dot2, dot3, dot4],
        price: 4999,
        description: 'Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)'
    },
    {
        id: 3,
        productName: 'Grand Theft Auto',
        productImageURL: [gta1, gta2, gta3, gta4, gta5],
        price: 999,
        description: 'Grand Theft Auto V - Premium Edition (PS4) Brand: ROCKSTAR GAMES Platform : PlayStation 4|Rated: Ages 18 and Over '
    },
    {
        id: 4,
        productName: 'Helmet',
        productImageURL: [helmet1, helmet2, helmet3],
        price: 1899,
        description: 'Steelbird SBH-17 Terminator ISI Certified Full Face Graphic Helmet in Matt Finish'
    },
    {
        id: 5,
        productName: 'Lenovo Laptop',
        productImageURL: [laptop1, laptop2, laptop3, laptop4],
        price: 78999,
        description: 'Lenovo Legion 5 Intel Core i5 (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB NVIDIA RTX 3050)'
    },
    {
        id: 6,
        productName: 'TV',
        productImageURL: [tv1, tv2, tv3, tv4],
        price: 52999,
        description: 'MI Xiaomi 138.8 cm (55 inches) 4K Ultra HD Smart Android OLED Vision TV O55M7-Z2IN (Black)'
    }
];
export default function Products() {
    return (
        <>
            <div className="products">
                {PRODUCTS.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </div>
        </>

    )
}