import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const listProf = [
  {
    prof: "Web-разработчиков",
    discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
 пользователям было быстро и удобно.`,
  },
  {
    prof: "Гейм-девелоперов",
    discr: `Создают видеоигры. Погружают всех нас в новые миры.`,
  },
  {
    prof: "AI/ML-cпециалистов",
    discr: `Используют в деле искусственный интеллект и машинное
 обучение. Фактами и прогнозами делает бизнесу хорошо.`,
  },
  {
    prof: "Аналитиков данных",
    discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
 бизнесу получать еще больше денег.`,
  },
  {
    prof: "Мобильных разработчиков",
    discr: `Создают мобильные приложения, которые найдут тебя везде.
 Умещают на маленьких экранах максимальный функционал.`,
  },
];

const listSpec = [
  {
    prof: "Прикладная информатика в компьютерном дизайне",
    discr: `Научишься делать красивое: игры, оболочку мобильных и веб-приложений, а ещё анимации и 3D-модели для роликов и даже фильмов!`,
  },
  {
    prof: "Цифровая трансформация экономики",
    discr: `Будешь помогать бизнесменам зарабатывать быстрее и проще, переводя долгие и нудные процессы в цифру, избавляя от бумажной волокиты и лишних расходов.`,
  },
  {
    prof: "Технология программирования",
    discr: `Для промышленной разработки программ характерна не индивидуальная, а коллективная работа. Это могут быть как небольшие команды из двух-трех разработчиков, так и крупные коллективы из сотен сотрудников.`,
  },
];

const listImg = ["logo_dvfu.png", "logo_imct.png"];

function Button(props) {
  return (
    <input
      className="button"
      type="button"
      value={props.val}
      onClick={props.onClick}
    />
  );
}
function Content() {
  const [page, setPage] = React.useState(0);
  if (page === 0) {
    return (
      <>
        <Head listImg={listImg} />
        <Tagline />
        <Button
          val="Хочу учиться!"
          onClick={() => {
            setPage(1);
          }}
        />
        <Professions title="Обучаем на:" list={listProf} />
      </>
    );
  } else {
    return (
      <>
        <Head listImg={listImg} />
        <Tagline />
        <Button val="Вернуться" onClick={() => setPage(0)} />
        <Professions
          title="На RUSSKY DIGITAL доступны направления:"
          list={listSpec}
        />
      </>
    );
  }
}

root.render(<Content />);

function Head(props) {
  const logoImages = listImg.map((img, index) => <img key={index} src={img} />);
  return <div className="head">{logoImages}</div>;
}

function Tagline() {
  return (
    <h1>
      Хватит уже игр, <br /> пора <br /> разрабатывать и зарабатывать
    </h1>
  );
}

function Professions(props) {
  const listProf = props.list.map((item, index) => (
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  ));
  return (
    <div className="prof">
      <h2>{props.title} </h2>
      <ul>{listProf}</ul>
    </div>
  );
}

function ProfItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  };
  return (
    <li onClick={press}>
      <span className="left">{props.prof}</span>
      <span className="right">{isOpen ? "×" : "+"}</span>
      {isOpen && <p> {props.discr}</p>}
    </li>
  );
}
