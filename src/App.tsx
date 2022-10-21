import { useState, ReactNode } from 'react'
import './App.scss'
import { Card } from './components/card/card'
import { Panel } from './components/panel/panel';

import { Container, Box, Progress, VStack } from '@chakra-ui/react'

function App(): JSX.Element {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPoint, setCurrentPoint] = useState<number>(0);

  const parsePointToColorSchemeAndMessage = (point: number): {
    colorScheme: string,
    message: string
  } => {
    let colorScheme = "green";
    let message = "우울증 아님";

    if (point < 4) {
      colorScheme = "green";
      colorScheme = "우울증 아님";
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
    <Card label={labels[currentStep]}
      pointClickCallback={(point) => {
        if (currentStep < labels.length) {
          setCurrentPoint(currentPoint + point);
          setCurrentStep(currentStep + 1);
        }
      }}/>
  
  const renderResultPanel = () => 
    <Container></Container>

  const isQuizStage = currentStep < labels.length;
  const {colorScheme, message} = parsePointToColorSchemeAndMessage(currentPoint);

  console.log(colorScheme)

  return (
    <Container>
      <VStack>
        <Panel color="warning">
          <span>{`우울증 선별도구 PHQ9 (${currentStep + 1}/${labels.length})`}</span>
        </Panel>
        { isQuizStage ?
            renderQuizPanel()
            : renderResultPanel() }
        <Panel>
          <Box className="ProgressBox">
            <span>{`${message} (${currentPoint})`}</span>
            <Progress colorScheme={colorScheme}
              value={ ((currentPoint) / (3 * labels.length)) * 100 } />
          </Box>
        </Panel>
      </VStack>
    </Container> 
  )
}

export default App
