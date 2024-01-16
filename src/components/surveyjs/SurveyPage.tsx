import { useCallback, useState, useRef } from 'react';

import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const binaryYesNo = [
  { value: 1, text: "כן" },
  { value: 0, text: "לא" }
]
const surveyJson = {
  pages: [
    {elements:[
      {
        type: "radiogroup",
        name: "gender",
        title: "מגדר",
        choices: ["זכר", "נקבה"]
      },
      {
        type: "radiogroup",
        name: "charediEducation",
        title: "בוגר החינוך החרדי",
        choices: binaryYesNo
      },
      {
        type: "radiogroup",
        name: "studiedForBagrut",
        title: "האם למדת בבית ספר המלמד לבגרות?",
        choices: binaryYesNo,
        visibleIf: "{charediEducation} = 1"
      },
      {
        type: "radiogroup",
        name: "typeOfPreparation",
        title: "האם למדת ללימודי הכנה לבגרות?",
        choices: [
          "למדתי במכינה קדם אקדמית",
          "למדתי במכינה להשלמת בגרויות",
          "השלמתי בגרות אקסטרנית"
        ],
        visibleIf: "{studiedForBagrut} = 1"
      },
      {
        type: "radiogroup",
        name: "typeOfPreAcademic",
        title: "האם למדת במכינה ייעודית לחרדים או במכינה כללית (משולבת בקמפוס)?",
        choices: ["למדתי במכינה ייעודית", "למדתי במכינה כללית"],
        visibleIf: "{typeOfPreparation} = 'למדתי במכינה קדם אקדמית'"
      },
      {
        type: "text",
        name: "specificPreAcademic",
        title: "באיזו מכינה למדת?",
        visibleIf: "{typeOfPreAcademic} = 'למדתי במכינה ייעודית'"
      },
      {
        type: "radiogroup",
        name: "continuedToDegree",
        title: "האם המשכת לתואר?",
        choices:binaryYesNo,
        visibleIf: "{typeOfPreparation} notempty"
      }
    ]}
  ],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Submit",
  showPrevButton: true,
  firstPageIsStarted: true,
  startSurveyText: "Take the Survey",
  completedHtml: "Thank you for your feedback!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function SurveyPage() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onComplete.add(displayResults);

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
        )
      }
    </>
  );
}

export default SurveyPage;