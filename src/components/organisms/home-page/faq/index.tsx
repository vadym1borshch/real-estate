import MainBlock from '../main-block'
import Accordion from '../../../atoms/accordion'

const FAQ = () => {
  return (
    <MainBlock
      title="FAQ"
      description={'Haben Sie Fragen? Wir haben die Antworten. Entdecken Sie die Antworten auf häufig gestellte Fragen in unserem umfangreichen FAQ-Bereich, der Ihnen alle benötigten Informationen bietet.'}>
      <div className="flex flex-col max-w-[760px] gap-3 pb-[150px] pt-[90px]">
        <Accordion label="Wie kann ich eine Immobilie kaufen?" open={false} setOpen={()=>{}}>
          Für den Verkauf Ihrer Immobilie benötigen Sie in der Regel einen aktuellen Grundbuchauszug, einen
          Energieausweis, Baupläne und Grundrisse, sowie gegebenenfalls Mietverträge und Nachweise über durchgeführte
          Renovierungen. Diese Dokumente helfen, den Verkaufsprozess reibungslos zu gestalten. So sind Sie bestens
          vorbereitet.
        </Accordion>
        <Accordion label="Welche Dokumente benötige ich für den Verkauf meiner Immobilie?" open={true} setOpen={()=>{}}>
          Für den Verkauf Ihrer Immobilie benötigen Sie in der Regel einen aktuellen Grundbuchauszug, einen
          Energieausweis, Baupläne und Grundrisse, sowie gegebenenfalls Mietverträge und Nachweise über durchgeführte
          Renovierungen. Diese Dokumente helfen, den Verkaufsprozess reibungslos zu gestalten. So sind Sie bestens
          vorbereitet.
        </Accordion>
        <Accordion label="Wie finde ich die besten Mietangebote in meiner Nähe?" open={false} setOpen={()=>{}}>
          Für den Verkauf Ihrer Immobilie benötigen Sie in der Regel einen aktuellen Grundbuchauszug, einen
          Energieausweis, Baupläne und Grundrisse, sowie gegebenenfalls Mietverträge und Nachweise über durchgeführte
          Renovierungen. Diese Dokumente helfen, den Verkaufsprozess reibungslos zu gestalten. So sind Sie bestens
          vorbereitet.
        </Accordion>
        <Accordion label="Welche Kosten sind mit dem Kauf einer Immobilie verbunden?" open={false} setOpen={()=>{}}>
          Für den Verkauf Ihrer Immobilie benötigen Sie in der Regel einen aktuellen Grundbuchauszug, einen
          Energieausweis, Baupläne und Grundrisse, sowie gegebenenfalls Mietverträge und Nachweise über durchgeführte
          Renovierungen. Diese Dokumente helfen, den Verkaufsprozess reibungslos zu gestalten. So sind Sie bestens
          vorbereitet.
        </Accordion>
        <Accordion label="Wie kann ich einen Besichtigungstermin vereinbaren?"open={false} setOpen={()=>{}}>
          Für den Verkauf Ihrer Immobilie benötigen Sie in der Regel einen aktuellen Grundbuchauszug, einen
          Energieausweis, Baupläne und Grundrisse, sowie gegebenenfalls Mietverträge und Nachweise über durchgeführte
          Renovierungen. Diese Dokumente helfen, den Verkaufsprozess reibungslos zu gestalten. So sind Sie bestens
          vorbereitet.
        </Accordion>
      </div>
    </MainBlock>
  )
}

export default FAQ