import myRecommend1 from "@/assets/images/body_record.png";
import myRecommend2 from "@/assets/images/my_exercise.png";
import myRecommend3 from "@/assets/images/my_diary.png";
import ProfileCard from "@components/profile-card";
import Button from "@components/button";
import Chart from "@components/chart";

const LIST_PROFILE_CARD = [
  {
    src: myRecommend1,
    title: "BODY RECORD",
    description: "自分のカラダの記録",
  },
  { src: myRecommend2, title: "MY EXERCISE", description: "自分の運動の記録" },
  { src: myRecommend3, title: "MY DIARY", description: "自分の日記" },
];

const LIST_DIARY = [
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

const MyRecordPage = () => {
  const renderListExercise = () => {
    let arrElement = [];
    for (let index = 0; index < 20; index++) {
      const element = (
        <li
          key={index}
          className="flex justify-between py-2 border-b border-gray/400"
        >
          <div>
            <p className="text-light text-[15px] font-light">
              ● <span className="ml-3">家事全般（立位・軽い</span>
            </p>
            <p className="text-primary/300 text-[15px] ml-6">26kcal</p>
          </div>
          <div className="text-lg text-primary/300">10 min</div>
        </li>
      );
      arrElement.push(element);
    }
    return arrElement;
  };

  return (
    <div className="px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14 justify-center max-w-[960px] mx-auto">
        {LIST_PROFILE_CARD.map((item, index) => (
          <ProfileCard
            key={index}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="mt-14 bg-chart max-w-[960px] mx-auto">
        <div className="flex items-center gap-10 px-10 py-5 text-light">
          <p className="break-words text-lg w-min">BODY RECORD</p>
          <p className="text-2xl">2021.05.21</p>
        </div>
        <Chart />
        <div className="flex gap-5 px-10 py-5">
          <button className="rounded-full px-8 py-2 bg-light text-primary/300">
            日
          </button>
          <button className="rounded-full px-8 py-2 bg-light text-primary/300">
            週
          </button>
          <button className="rounded-full px-8 py-2 bg-light text-primary/300">
            月
          </button>
          <button className="rounded-full px-8 py-2 bg-primary/300 text-light">
            年
          </button>
        </div>
      </div>
      <div className="bg-dark/500/text max-w-[960px] mx-auto mt-14 px-6 py-4 relative">
        <div className="flex sticky top-0">
          <div className="w-24 text-[15px] text-light font-sans">
            MY EXERCISE
          </div>
          <div className="text-[22px] text-light font-sans">2021.05.21</div>
        </div>
        <ul className="grid grid-cols-2 max-h-[264px] overflow-auto gap-x-14 scrollbar-thin scrollbar-thumb-primary/300 scrollbar-track-gray/400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-6">
          {renderListExercise()}
        </ul>
      </div>
      <div className="max-w-[960px] mx-auto mt-14">
        <h1 className="font-sans text-dark/500/text text-[22px]">MY DIARY</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {LIST_DIARY.map((item, index) => (
            <div
              key={index}
              className="h-[231px] gap-3 border-2 border-border p-4"
            >
              <p className="text-dark/500/text font-sans text-lg">
                {item.date} <br />
                {item.time}
              </p>
              <div className="overflow-hidden text-ellipsis font-light text-xs leading-4 mt-2">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-[30px] justify-center mb-16">
        <Button>自分の日記をもっと見る</Button>
      </div>
    </div>
  );
};

export default MyRecordPage;
