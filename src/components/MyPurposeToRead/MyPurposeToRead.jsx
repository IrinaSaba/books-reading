import React from "react";
import { useSelector } from "react-redux";
import { langOptionsMyPurposeToRead } from "../../assets/langOptionsMyPurposeToRead";
import { getLang } from "../../redux/lang/langSelector";
import {
  getDurationPeriod,
  getRemaindBooks,
} from "../../redux/training/trainingSelectors";
import { getTheme } from "../../redux/theme/themeSelector";
import s from "./MyPurposeToRead.module.scss";

const MyPurposeToRead = ({ books, isTrain }) => {
  const duration = useSelector(getDurationPeriod);
  const remaindBooks = useSelector(getRemaindBooks);
  const theme = useSelector(getTheme);
  const lang = useSelector(getLang);
  const { goal, booksNum, days, read } = langOptionsMyPurposeToRead;

  return (
    <div className={isTrain ? s.myPurposeToRead_complete : s.myPurposeToRead}>
      <h2 className={isTrain ? s.title_complete : s.title}>{goal[lang]}</h2>
      <div className={isTrain ? s.numbersPurpose_complete : s.numbersPurpose}>
        <div className={isTrain ? s.numbers_complete : s.numbers}>
          <span className={isTrain ? s.wrapper_complete : s.wrapper}>
            {books.length}
          </span>
          <p className={isTrain ? s.numbers_text_complete : s.numbers_text}>
            {booksNum[lang]}
          </p>
        </div>
        <div className={isTrain ? s.numbers_complete : s.numbers}>
          <span className={isTrain ? s.wrapper_complete : s.wrapper}>
            {duration}
          </span>
          <p className={isTrain ? s.numbers_text_complete : s.numbers_text}>
            {days[lang]}
          </p>
        </div>

        {isTrain && (
          <div className={s.numbers_complete}>
            <span className={s.wrapper_complete_last}>
              {remaindBooks.length}
            </span>
            <p className={s.numbers_text_complete}>{read[lang]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPurposeToRead;
