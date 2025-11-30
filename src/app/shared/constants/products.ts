import { IProduct } from 'src/app/products/products.interface';

export const ALL_PRODUCTS = [
  {
    _id: '68d44206e7812c68fd249197',
    productName: 'Pals Paint Beta Shine',
    productType: 'All Rounder',
    shortDescription:
      'This is pals paint beta shine best for all types of walls.',
    image: 'https://palspaint.netlify.app/products/ppbsa_1.webp',
    priceStartingFrom: 799,
  },
  {
    _id: '68d4506f8ede7ba95213add5',
    productName: 'Plastic Paint',
    productType: 'Interior',
    shortDescription:
      'Give your walls a smooth, long-lasting finish with premium Plastic Paint Interior for beautiful, durable home interiors.',
    image: 'http://palspaint.netlify.app/products/ppi_1.png',
    priceStartingFrom: 279.29999999999995,
  },
  {
    _id: '690f85ae119aceff71abeb86',
    productName: 'Plastic Paint',
    productType: 'Exterior',
    shortDescription:
      'Protects your home from rain, dust, and sunlight while keeping it beautiful all year with pals plastic paint exterior.',
    image: 'https://palspaint.netlify.app/products/ppe_1.png',
    priceStartingFrom: 349.29999999999995,
  },
  {
    _id: '6918241bcbdba7e53dbd0d82',
    productName: 'Wall Primer',
    productType: 'Interior',
    shortDescription:
      'Enhance adhesion and durability with a high-performance wall primer built for perfect results.',
    image: 'https://palspaint.netlify.app/products/wpi_1.png',
    priceStartingFrom: 249,
  },
  {
    _id: '69182531cbdba7e53dbd0d9d',
    productName: 'Wall Primer',
    productType: 'Exterior',
    shortDescription:
      'Built for tough weather — a superior exterior primer that ensures strong adhesion and long-lasting protection.',
    image: 'https://palspaint.netlify.app/products/wpe_1.webp',
    priceStartingFrom: 299,
  },
  {
    _id: '691825ebcbdba7e53dbd0dbc',
    productName: 'Acrylic Washable Distemper',
    productType: 'All Rounder',
    shortDescription:
      'Easy to clean and tough on stains — a high-quality acrylic washable distemper for lasting freshness.',
    image: 'https://palspaint.netlify.app/products/awd_1.webp',
    priceStartingFrom: 539,
  },
];

export const PRODUCT_DETAILS: IProduct[] = [
  {
    _id: '68d44206e7812c68fd249197',
    productName: 'Pals Paint Beta Shine',
    productType: 'All Rounder',
    image: 'https://palspaint.netlify.app/products/ppbsa_1.webp',
    shortDescription:
      'This is pals paint beta shine best for all types of walls.',
    packSize: [
      {
        mrp: 11499,
        size: '20L',
        discount: 0,
        _id: '692bd6ae04eb90723eca906b',
      },
      {
        mrp: 7499,
        size: '10L',
        discount: 0,
        _id: '692bd6ae04eb90723eca906c',
      },
      {
        mrp: 4399,
        size: '4L',
        discount: 0,
        _id: '692bd6ae04eb90723eca906d',
      },
      {
        mrp: 799,
        size: '1L',
        discount: 0,
        _id: '692bd6ae04eb90723eca906e',
      },
    ],
    createdAt: '2025-09-24T19:09:58.540Z',
    updatedAt: '2025-11-30T05:31:26.195Z',
    __v: 0,
    longDescription:
      'Before applying Pals Paint Beta Shine All Rounder, ensure that the surface is clean, dry, and free from dust, grease, algae, or loose paint particles. Scrape off any old or flaking paint and smoothen uneven areas using sandpaper. Apply a suitable primer and allow it to dry completely for a strong base and improved adhesion. Stir the paint thoroughly before and during use to maintain uniform consistency. If required, dilute the paint with clean water up to 40% by volume for the first coat and 20% for the second coat, depending on the application method and surface condition. Apply evenly using a brush, roller, or spray gun, maintaining uniform strokes to achieve a smooth, glossy finish. Allow 4–6 hours of drying time between coats and ensure good ventilation for faster drying and long-lasting results. Clean all tools immediately after painting with water, and let the surface dry completely before exposure to moisture, dust, or heavy contact.',
    largeImage: 'http://palspaint.netlify.app/products/ppbsa_2.webp',
    thumbnail: 'http://palspaint.netlify.app/products/ppbsa_0.webp',
    priceStartingFrom: 799,
  },
  {
    _id: '68d4506f8ede7ba95213add5',
    productName: 'Plastic Paint',
    productType: 'Interior',
    image: 'http://palspaint.netlify.app/products/ppi_1.png',
    shortDescription:
      'Give your walls a smooth, long-lasting finish with premium Plastic Paint Interior for beautiful, durable home interiors.',
    packSize: [
      {
        mrp: 3599,
        size: '20L',
        discount: 30,
        _id: '6918ca90c0b79b1ae33b8c95',
      },
      {
        mrp: 2199,
        size: '10L',
        discount: 30,
        _id: '6918ca90c0b79b1ae33b8c96',
      },
      {
        mrp: 1099,
        size: '4L',
        discount: 30,
        _id: '6918ca90c0b79b1ae33b8c97',
      },
      {
        mrp: 399,
        size: '1L',
        discount: 30,
        _id: '6918ca90c0b79b1ae33b8c98',
      },
    ],
    createdAt: '2025-09-24T20:11:27.376Z',
    updatedAt: '2025-11-15T18:46:40.615Z',
    __v: 0,
    longDescription:
      'Before applying Pals Plastic Paint Interior, ensure that the surface is clean, dry, and free from dust, grease, or loose particles. If the wall has old or flaking paint, scrape it off and smoothen the surface using sandpaper. Apply a suitable primer and allow it to dry completely for better adhesion and durability. Mix the paint thoroughly before use and, if required, dilute it with clean water (up to 40% by volume) depending on the surface and desired finish. Apply the paint evenly using a brush, roller, or spray gun, maintaining consistent strokes for a smooth finish. For best results, apply two coats with a gap of 4–6 hours between coats, ensuring proper drying in a well-ventilated area. Clean all tools immediately after use with water and allow the painted surface to dry completely before exposure to dust or moisture.',
    largeImage: 'http://palspaint.netlify.app/products/ppi_2.png',
    thumbnail: 'http://palspaint.netlify.app/products/ppi_0.png',
    priceStartingFrom: 279.29999999999995,
  },
  {
    _id: '690f85ae119aceff71abeb86',
    productName: 'Plastic Paint',
    productType: 'Exterior',
    image: 'https://palspaint.netlify.app/products/ppe_1.png',
    shortDescription:
      'Protects your home from rain, dust, and sunlight while keeping it beautiful all year with pals plastic paint exterior.',
    longDescription:
      'Before applying Pals Paint Exterior Plastic Paint, make sure the surface is clean, dry, and free from dust, grease, loose particles, or any fungal growth. Remove dirt, algae, or moss using a wire brush and wash thoroughly with clean water. Repair any cracks or holes with cement-based putty and allow the surface to dry completely. Apply one coat of Pals Exterior Primer for better adhesion and durability, and let it dry for 6–8 hours. Stir the paint well before use; for the first coat, dilute with clean water up to 40–45% and for the second coat up to 30–35%. Apply two coats using a brush, roller, or spray gun, maintaining a 4–6 hour interval between coats, and avoid painting under direct sunlight or during rain. The paint provides coverage of approximately 100–180 sq. ft. per litre per coat, dries to touch in 30–45 minutes, and achieves full cure within 24 hours. Store the paint in a cool, dry place away from sunlight and heat, keep the container tightly closed after use, and ensure it is kept out of reach of children.',
    packSize: [
      {
        mrp: 4399,
        size: '20L',
        discount: 30,
        _id: '692bd6d904eb90723eca9092',
      },
      {
        mrp: 2649,
        size: '10L',
        discount: 30,
        _id: '692bd6d904eb90723eca9093',
      },
      {
        mrp: 1349,
        size: '4L',
        discount: 30,
        _id: '692bd6d904eb90723eca9094',
      },
      {
        mrp: 499,
        size: '1L',
        discount: 30,
        _id: '692bd6d904eb90723eca9095',
      },
    ],
    createdAt: '2025-11-08T18:02:22.658Z',
    updatedAt: '2025-11-30T05:32:09.596Z',
    __v: 0,
    largeImage: 'https://palspaint.netlify.app/products/ppe_2.png',
    thumbnail: 'https://palspaint.netlify.app/products/ppe_0.webp',
    priceStartingFrom: 349.29999999999995,
  },
  {
    _id: '6918241bcbdba7e53dbd0d82',
    productName: 'Wall Primer',
    productType: 'Interior',
    image: 'https://palspaint.netlify.app/products/wpi_1.png',
    largeImage: 'https://palspaint.netlify.app/products/wpi_2.webp',
    shortDescription:
      'Enhance adhesion and durability with a high-performance wall primer built for perfect results.',
    longDescription:
      'To achieve the best results with your wall primer, begin by ensuring the surface is clean, dry, and free from dust, grease, loose particles, or old flaking paint. Repair cracks or holes using putty and sand the area smoothly before applying the primer. Stir the primer thoroughly to maintain a consistent texture. Apply the first coat evenly using a brush or roller, covering all areas without leaving patches. Allow the coat to dry completely, preferably for 4–6 hours, depending on weather conditions. Once dry, lightly sand the surface to remove minor imperfections and wipe away the dust. If required, apply a second coat for better coverage and adhesion. Make sure the wall is fully dry before applying the topcoat paint. Use clean tools and avoid diluting the primer more than recommended. Follow these steps to ensure strong adhesion, smooth finish, and long-lasting paint performance on your walls.',
    packSize: [
      {
        mrp: 2299,
        size: '20L',
        discount: 0,
        _id: '692bd72304eb90723eca90e0',
      },
      {
        mrp: 1399,
        size: '10L',
        discount: 0,
        _id: '692bd72304eb90723eca90e1',
      },
      {
        mrp: 699,
        size: '4L',
        discount: 0,
        _id: '692bd72304eb90723eca90e2',
      },
      {
        mrp: 249,
        size: '1L',
        discount: 0,
        _id: '692bd72304eb90723eca90e3',
      },
    ],
    createdAt: '2025-11-15T06:56:27.304Z',
    updatedAt: '2025-11-30T05:33:23.228Z',
    __v: 0,
    thumbnail: 'https://palspaint.netlify.app/products/wpi_0.png',
    priceStartingFrom: 249,
  },
  {
    _id: '69182531cbdba7e53dbd0d9d',
    productName: 'Wall Primer',
    productType: 'Exterior',
    image: 'https://palspaint.netlify.app/products/wpe_1.webp',
    largeImage: 'https://palspaint.netlify.app/products/wpe_2.webp',
    shortDescription:
      'Built for tough weather — a superior exterior primer that ensures strong adhesion and long-lasting protection.',
    longDescription:
      'For best results with exterior wall primer, start by cleaning the surface thoroughly to remove dust, algae, fungus, grease, and loose paint using a brush or pressure wash. Ensure the wall is completely dry before application. Repair cracks and surface imperfections using exterior-grade putty and sand the area for a smooth finish. Stir the primer well to achieve a uniform consistency. Apply the first coat evenly using a brush or roller, ensuring full coverage across the surface. Allow the primer to dry for 4–6 hours, depending on weather conditions. After drying, lightly sand to remove minor roughness and wipe off any dust. If required, apply a second coat for stronger adhesion and enhanced protection. Make sure the surface is fully dry before applying exterior paint. Avoid over-dilution and always use clean tools. Follow these steps to ensure long-lasting durability, improved paint bonding, and superior weather resistance for exterior walls.',
    packSize: [
      {
        mrp: 2899,
        size: '20L',
        discount: 0,
        _id: '692bd70a04eb90723eca90b9',
      },
      {
        mrp: 1749,
        size: '10L',
        discount: 0,
        _id: '692bd70a04eb90723eca90ba',
      },
      {
        mrp: 849,
        size: '4L',
        discount: 0,
        _id: '692bd70a04eb90723eca90bb',
      },
      {
        mrp: 299,
        size: '1L',
        discount: 0,
        _id: '692bd70a04eb90723eca90bc',
      },
    ],
    createdAt: '2025-11-15T07:01:05.982Z',
    updatedAt: '2025-11-30T05:32:58.653Z',
    __v: 0,
    thumbnail: 'https://palspaint.netlify.app/products/wpe_0.png',
    priceStartingFrom: 299,
  },
  {
    _id: '691825ebcbdba7e53dbd0dbc',
    productName: 'Acrylic Washable Distemper',
    productType: 'All Rounder',
    image: 'https://palspaint.netlify.app/products/awd_1.webp',
    largeImage: 'https://palspaint.netlify.app/products/awd_2.webp',
    shortDescription:
      'Easy to clean and tough on stains — a high-quality acrylic washable distemper for lasting freshness.',
    longDescription:
      'For best results with acrylic washable distemper, begin by preparing the surface thoroughly. Ensure the wall is clean, dry, and free from dust, oil, loose particles, or old flaking paint. Fill cracks and holes with putty, allow it to dry, and sand the surface smoothly. Stir the distemper well to achieve a uniform consistency. If required, dilute it as per the recommended ratio to get the right brushing viscosity. Apply the first coat evenly using a brush or roller, ensuring complete and streak-free coverage. Allow the coat to dry for 3–4 hours. Lightly sand the surface to remove any minor roughness and wipe away the dust. Apply a second coat for a richer, smoother, and more durable finish. Ensure proper drying before exposing the walls to cleaning or wiping. Follow these steps to achieve cleanable, long-lasting, and vibrant walls with a premium washable distemper.',
    packSize: [
      {
        mrp: 1499,
        size: '20Kg',
        discount: 0,
        _id: '692bd68b04eb90723eca9046',
      },
      {
        mrp: 899,
        size: '10Kg',
        discount: 0,
        _id: '692bd68b04eb90723eca9047',
      },
      {
        mrp: 539,
        size: '5Kg',
        discount: 0,
        _id: '692bd68b04eb90723eca9048',
      },
    ],
    createdAt: '2025-11-15T07:04:11.839Z',
    updatedAt: '2025-11-30T05:30:51.058Z',
    __v: 0,
    thumbnail: 'https://palspaint.netlify.app/products/awd_0.webp',
    priceStartingFrom: 539,
  },
];
