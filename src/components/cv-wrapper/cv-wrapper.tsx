import React, { useState } from "react";
import { Background } from "../../container/background/background";
import Cv from "../cv/cv.component";
import { VACANCIES, Vacancy } from "../../utils/consts/vacancies.const";

export const CvWrapper = () => {
  const [vacancies] = useState<Vacancy[]>(VACANCIES);

  return (
    <div>
      <Background />
      <Cv vacancies={vacancies} />
    </div>
  );
};
