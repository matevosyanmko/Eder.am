// get images by folder
const importAll = r => {
  return r.keys().map(r);
};
// kitchen small/big images
const Kitchen = importAll(
  require.context(
    "./assets/images/gallery/kitchen/thumbnails",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const KitchenBig = importAll(
  require.context(
    "./assets/images/gallery/kitchen/big",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
//
const Bedrooms = importAll(
  require.context(
    "./assets/images/gallery/bedrooms/thumbnails",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const BedroomsBig = importAll(
  require.context(
    "./assets/images/gallery/bedrooms/big",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
// doors
const Doors = importAll(
  require.context(
    "./assets/images/gallery/doors/thumbnails",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const DoorsBig = importAll(
  require.context(
    "./assets/images/gallery/doors/big",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
// living rooms
const LivingRooms = importAll(
  require.context(
    "./assets/images/gallery/living rooms/thumbnails",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const LivingRoomsBig = importAll(
  require.context(
    "./assets/images/gallery/living rooms/big",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
// other
const Other = importAll(
  require.context(
    "./assets/images/gallery/other/thumbnails",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const OtherBig = importAll(
  require.context(
    "./assets/images/gallery/other/big",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);

// pergolas
// havana
const PergolasHavana = importAll(
  require.context(
    "./assets/images/gallery/pergolas/thumbnails/havana",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const PergolasHavanaBig = importAll(
  require.context(
    "./assets/images/gallery/pergolas/big/havana",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
// araqayadzor
const PergolasArqayadzor = importAll(
  require.context(
    "./assets/images/gallery/pergolas/thumbnails/arqayadzor",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const PergolasArqayadzorBig = importAll(
  require.context(
    "./assets/images/gallery/pergolas/big/arqayadzor",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
// araqayadzor
const PergolasJermuk = importAll(
  require.context(
    "./assets/images/gallery/pergolas/thumbnails/jermuk",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const PergolasJermukBig = importAll(
  require.context(
    "./assets/images/gallery/pergolas/big/jermuk",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);

// other
const Pergolasother = importAll(
  require.context(
    "./assets/images/gallery/pergolas/thumbnails/other",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);
const PergolasotherBig = importAll(
  require.context(
    "./assets/images/gallery/pergolas/big/other",
    false,
    /\.(png|jpe?g|svg|JPE?G|)$/
  )
);

// gallery images for homepage small and big
export const GalleryArray = [
  { thumbnails: Kitchen, big: KitchenBig },
  { thumbnails: Bedrooms, big: BedroomsBig },
  { thumbnails: LivingRooms, big: LivingRoomsBig },
  [
    {
      thumbnails: PergolasArqayadzor,
      header: ["Արքայաձոր", "АРКАЯДЗОР", "Arkhayadzor"]
    },
    { thumbnails: PergolasHavana, header: ["Հավանա", "ГАВАНА", "Havana"] },
    { thumbnails: PergolasJermuk, header: ["Ջերմուկ", "Джермук", "Djermuk"] },
    { thumbnails: Pergolasother, header: ["Այլ", "Другие", "Other"] }
  ],
  // { thumbnails: Pergolas, big: Pergolas },
  { thumbnails: Doors, big: DoorsBig },
  { thumbnails: Other, big: OtherBig }
];
// abouts us images
export const PerGolasGalleryBig = [
  ...PergolasArqayadzorBig,
  ...PergolasHavanaBig,
  ...PergolasJermukBig,
  ...PergolasotherBig
];

export const AboutUsItems = importAll(
  require.context("./assets/images/aboutUs/items", false, /\.(png|jpe?g|svg)$/)
);

console.log(GalleryArray);
