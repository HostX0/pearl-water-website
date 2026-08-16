const optimizeImage = (src: string, width: number, quality = 90) =>
  `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;

export const driveSource = (id: string, width = 2400) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

const driveImage = (id: string, width = 1200, quality = 90) =>
  optimizeImage(driveSource(id, width), width, quality);

export const mediaSources = {
  logos: {
    ar: driveSource('1h1CF6l-ZpZSII7upncjUIC01TAhn4-L_', 1400),
    en: driveSource('1OC7oAaf306UyZALXExnlJGNjX9RpLpSt', 1400),
  },
  home: {
    hero: driveSource('1jiYaUdEno-D-aUdsTnK4URnyRa4Bjg2x', 1600),
    purity: driveSource('1gi8HKhcBgPnSzzOhXsPQdZOHGw-UO0wS', 1600),
    standards: driveSource('1KggyALGnwz_yyI1at8LB61ymMUhv0hGQ', 1600),
    lifestyleFamily: driveSource('1olEJdbFM2NPyFkmXP98ELvLENJVUHrT9', 1600),
    lifestyleActive: driveSource('1TCcrCJe7eD6xB0dEkuK0FbmD0KfqHRD3', 1600),
    distribution: driveSource('1d90nFrBPJttVHQZk23qDkbeN0UPmU-aM', 1920),
    iraq: driveSource('1BNeXshDqQhU1tMVU7sHm2ISghSiDLZeh', 1600),
  },
  products: {
    front1000: driveSource('1Q0dryDXEK10QCE9nxlEj5wlgnnVKkT9_', 1000),
    front500: driveSource('1bCX49Fz8pW0jCE2l5Dr1YiyXprMzhZI8', 1000),
    front330: driveSource('1HTPbe3e55cVuamJOqxy8IGTWjdd9Hdab', 1000),
    front200: driveSource('1E_0jguyCKFLmuZjSOG3m0RtnARRhn6Rb', 1000),
  },
} as const;

export const media = {
  logos: {
    ar: driveImage('1h1CF6l-ZpZSII7upncjUIC01TAhn4-L_', 384, 92),
    en: driveImage('1OC7oAaf306UyZALXExnlJGNjX9RpLpSt', 384, 92),
  },
  home: {
    hero: driveImage('1jiYaUdEno-D-aUdsTnK4URnyRa4Bjg2x', 1080, 90),
    carton: driveImage('1X6T5UP9FuxZP3KwFL_wamSr5fcl6cf76'),
    ripple: driveImage('1fLaoyhad38gjFsKbvpRQApj2TmXLqCll'),
    purity: driveImage('1gi8HKhcBgPnSzzOhXsPQdZOHGw-UO0wS', 828, 90),
    process: driveImage('1BO8-BXaev2fKQ6M4OHfZpOE5lo-4s7el'),
    standards: driveImage('1KggyALGnwz_yyI1at8LB61ymMUhv0hGQ'),
    lifestyleFamily: driveImage('1olEJdbFM2NPyFkmXP98ELvLENJVUHrT9'),
    lifestyleActive: driveImage('1TCcrCJe7eD6xB0dEkuK0FbmD0KfqHRD3'),
    distribution: driveImage('1d90nFrBPJttVHQZk23qDkbeN0UPmU-aM'),
    iraq: driveImage('1BNeXshDqQhU1tMVU7sHm2ISghSiDLZeh'),
    cta: driveImage('1FDKQ7u-xNaRsnuHFX67Pf9k0Fj9n6rL5'),
  },
  products: {
    group: driveImage('1XpRn1i-qeKpobA8ivlj38IA_d7TKElc7'),
    front1000: driveImage('1Q0dryDXEK10QCE9nxlEj5wlgnnVKkT9_', 750, 90),
    front500: driveImage('1bCX49Fz8pW0jCE2l5Dr1YiyXprMzhZI8', 750, 90),
    front330: driveImage('1HTPbe3e55cVuamJOqxy8IGTWjdd9Hdab', 750, 90),
    carton: driveImage('1iXV4EuCQdja7XgmJkUfucZXh_ZSRfwIQ'),
    shrink: driveImage('1zGrsfbVexjb4Gm9sdCixVPoMgypPtbvi'),
    detail: driveImage('1p8LgGWyriWiAcojzG3lB60FI2sx-fKTs'),
    use: driveImage('15xvt6lZ5p875LCS9rCVUA2Pak39Zle_A'),
  },
  quality: {
    hero: driveImage('1Qnp-mNO3-appynBH_ZGEfQI0lan9A-OU'),
    lab: driveImage('1wHH06JQDrLEL2cOwkidvJviq_l6eSwvH'),
    sample: driveImage('1yWtoM6R8Hfkt0zjMBMoX5g6020N5RtHM'),
    hygiene: driveImage('1u5wc-3Y8nHMrXnFlo1ml3tiXfUeZYvRC'),
    water: driveImage('1qMNLenollQMpfnHhHtPZJeUh_jBvNNfs'),
    certificateVisual: driveImage('1dEgiVx0fY1HKpK31MUqYL1MISZIImxCo'),
    factory: driveImage('14HozFX5fnZFNd_8KlShzsjx-z_JSh-Er'),
  },
  about: {
    brand: driveImage('111Eq-wyd20KYn3ihxTh1-YG8KPtLJD_W'),
    factory: driveImage('1XLDfxoU6yYBoAV1NbI5XeIw3suNgV_fl'),
    team: driveImage('1YnxUPUzqMi9BP7lephODon_Oj71Ub5Ak'),
    iraq: driveImage('1SdwdeWPxZvCU3EUo_NzjWjha_zbigx8O'),
    operations: driveImage('15lMES6sub4HxoCSO50tmHMEhdXAOjdPQ'),
  },
  distribution: {
    hero: driveImage('1ytQGxnymkw7Y1pBJObRcK3qGcB1Qni5R'),
    warehouse: driveImage('1uAeQvN1UbkbBTZ5Jnii3OFhNO3UXRHIB'),
    retail: driveImage('1CNa_rXk6iQOR0qo8jxbA9o_npxyXyPDj'),
    loading: driveImage('1vIULUp-7R0YdpNZuxCONkiBkyw1du4jl'),
    b2b: driveImage('1LhXq-1jxQiJWYgQg9-xq2JkCsMvj5IDp'),
  },
  contact: {
    hero: driveImage('1CRyXYoRW6pYIlcbKKkqYiPCYiylJ2Fj5'),
    b2b: driveImage('1cq_U8YuZjA57UJGROO_jst1fssveHQhD'),
    location: driveImage('1KGiAxzIMYGF-d4PuLDJRl1KiGH00sFyx'),
  },
} as const;

export { driveImage };
