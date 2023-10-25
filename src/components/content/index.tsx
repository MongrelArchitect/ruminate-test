import Skew from "../skew";

interface contentProps {
  skew?: string;
  backgroundColor: string;
  minHeight: string;
  zIndex: number;
}

export default function Content({
  backgroundColor,
  skew,
  minHeight,
  zIndex,
}: contentProps) {
  const fontColor =
    backgroundColor === "bg-brand-yellow"
      ? "text-brand-black"
      : "text-neutral-50";

  return (
    <div
      className={`relative flex flex-col items-center gap-2 px-16 py-64 z-[${zIndex}] ${backgroundColor} ${minHeight}`}
    >
      <div className={`z-[${zIndex}] ${fontColor}`}>
        <h1 className="text-7xl">Some Info Here</h1>
        <p>
          Adipisicing tempore numquam porro aut et! Labore ipsum vel dolores
          adipisci a laborum, cumque Consectetur nihil totam eos similique nemo
          quasi, laborum vitae Animi possimus quibusdam incidunt sint tempora
          iste voluptates accusantium? Nam id vero nesciunt obcaecati et Aliquid
          adipisci repellendus mollitia fugiat expedita. Odit fuga ut esse
          maxime inventore. Accusamus ipsum sit voluptas quasi blanditiis Fuga
          accusantium tempore odit explicabo eum. Commodi earum accusantium
          facere quas molestiae explicabo Nesciunt veniam non voluptates quod
          quidem culpa Quam odio cum voluptate vero odio. Voluptate commodi
          adipisci quam magnam tenetur Nemo nostrum iure quae laudantium ipsam?
          Reprehenderit nihil velit illum architecto illum aperiam.
          Necessitatibus ex fugit deserunt atque beatae. Delectus eos ea
          provident facere molestias Earum voluptas assumenda cumque aliquam
          quae quisquam Consequatur est adipisci quas fugiat itaque ipsam in
          error Quisquam vitae laboriosam iste rerum quasi beatae quas cum qui
          atque omnis Sit sint qui at eius labore enim nulla Facilis ab nemo
          atque incidunt iure. Nostrum sunt ea voluptatem labore repellendus
          reiciendis quas Minus pariatur velit maxime eaque vel. Inventore modi
          labore non sint voluptatum. Voluptatem numquam ipsam rem ipsa dolorem
          autem laboriosam neque, earum unde ullam, quasi Quaerat voluptas
          suscipit odio facilis rerum Sequi molestiae et id dolore quisquam.
          Iure numquam nisi nesciunt temporibus nobis ea sint? Quo similique
          saepe veritatis in tempora? Libero aut vel quod rem explicabo? Dicta
          error sint soluta architecto modi suscipit dolorum Beatae ea rem in
          adipisci ut. Voluptate similique consequuntur voluptatibus optio
          architecto Ab ratione enim minima nisi at sint exercitationem in. At
          quae iusto beatae sapiente corporis! Inventore velit ex corporis
          consequatur omnis? Totam beatae labore autem natus qui. Dolores libero
          quisquam amet nam esse minus voluptatibus Repellendus ipsam accusamus
          obcaecati debitis tempore deserunt Ea laudantium ipsam a reprehenderit
          ratione. Illum necessitatibus quam esse cumque commodi. Corporis neque
          explicabo labore modi voluptatibus.
        </p>
      </div>
      {skew ? <Skew style={skew} /> : null}
    </div>
  );
}
