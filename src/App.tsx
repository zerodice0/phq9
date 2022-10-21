import { useState, ReactNode } from 'react'
import './App.scss'
import { Card } from './components/card/card'
import { Panel } from './components/panel/panel';

import { Container, Box, Progress, VStack } from '@chakra-ui/react'

interface QuizState {
  step: number,
  point: number
}

function App(): JSX.Element {
  const [currentQuiz, setCurrentQuiz] = useState<QuizState>({
    step: 0,
    point: 0
  });

  const parsePointToColorSchemeAndMessage = (point: number): {
    colorScheme: string,
    message: string
  } => {
    let colorScheme = "green";
    let message = "우울증 아님";

    if (point < 4) {
      colorScheme = "green";
      message = "우울증 아님";
    } else if (point < 9) {
      colorScheme = "yellow";
      message = "가벼운 우울증";
    } else if (point < 19) {
      colorScheme = "orange";
      message = "중간정도 우울증 / 전문가의 상담이 필요합니다";
    } else {
      colorScheme = "red";
      message = "심한 우울증 / 치료가 필요합니다";
    }

    return {
      colorScheme: colorScheme,
      message: message
    };
  }  
  
  const labels = [
    "기분이 가라앉거나, 우울하거나, 희망이 없다고 느꼈다.",
    "평소 하던 일에 대한 흥미가 없어지거나 즐거움을 느끼지 못했다.",
    "잠들기가 어렵거나 자주 깼다. 혹은 너무 많이 잤다.",
    "평소보다 식욕이 줄었다. 혹은 평소보다 많이 먹었다.",
    "다른 사람들이 눈치 챌 정도로 평소보다 말과 행동 이 느려졌다/혹은 너무 안절부절 못해서 가만히 앉 아있을 수 없었다.",
    "피곤하고 기운이 없었다.",
    "내가 잘못 했거나, 실패했다는 생각이 들었다. 혹은 자신과 가족을 실망시켰다고 생각했다.",
    "신문을 읽거나 TV를 보는 것과 같은 일상적인 일에 도 집중할 수가 없었다.",
    "차라리 죽는 것이 더 낫겠다고 생각했다. 혹은 자해 할 생각을 했다."
  ];
  
  const renderQuizPanel = () => 
    <Card label={labels[currentQuiz.step]}
      pointClickCallback={(point) => {
        if (currentQuiz.step < labels.length) {
          setCurrentQuiz({
            point: currentQuiz.point + point,
            step: currentQuiz.step + 1
          });
        }
      }}/>
  
  const renderResultPanel = () => 
    <Container></Container>

  const {step, point} = currentQuiz;
  const isQuizStage = step < labels.length;
  const {colorScheme, message} = parsePointToColorSchemeAndMessage(point);

  return (
    <Container>
      <VStack>
        <Panel color="warning">
          <span>{`우울증 선별도구 PHQ9 (${step + 1}/${labels.length})`}</span>
        </Panel>
        { isQuizStage ?
            renderQuizPanel()
            : renderResultPanel() }
        <Panel>
          <Box className="ProgressBox">
            <span>{`${message} (${point})`}</span>
            <Progress colorScheme={colorScheme}
              value={ ((point) / (3 * labels.length)) * 100 } />
          </Box>
        </Panel>
      </VStack>
    </Container> 
  )
}

export default App
