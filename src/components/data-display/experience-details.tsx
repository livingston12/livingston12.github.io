import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  secondaryPosition,
  startDateSecondary,
  endDateSecondary,
  summarySecondary,
}: ExperienceDetailsProps) => {
  const countPosition = (position && secondaryPosition) ? 2 : 1;
  const listSummary = [];
  for (let i = 0; i < countPosition; i++) {
    listSummary.push({
      position: i === 0 ? position : secondaryPosition,
      startDate: i === 0 ? startDate : startDateSecondary,
      endDate: i === 0 ? endDate : endDateSecondary,
      summary: i === 0 ? summary : summarySecondary,
    });
  }
  
  return (
    <Card className="mx-auto w-full max-w-4xl p-8">
    {listSummary.map((item, index) => (
      <div key={index} className="flex flex-col md:flex-row justify-between items-start gap-2 mb-8">
        {/* Mostrar el logo sólo en la primera iteración */}
        {index === 0 && (
          <div className="md:w-1/4">
            <ImageWrapper
              src={logo}
              srcForDarkMode={darkModeLogo}
              alt={logoAlt}
              className="max-w-[120px]"
            />
          </div>
        )}
        <div className={`flex flex-col gap-4 md:w-2/4 ${index === 0 ? '' : 'md:ml-[25%] pl-'}`}
          style={{  paddingLeft: index === 0 ? '0' : '3px' }}
        >
          <Typography variant="subtitle" className="font-semibold text-gray-900" >
            {item.position}
          </Typography>
          <ul className="flex list-disc flex-col gap-2 md:gap-3">
            {item.summary?.map((sentence, idx) => (
              <Typography component="li" key={idx} style={{ textAlign: 'justify' }}>
                {sentence}
              </Typography>
            ))}
          </ul>
        </div>
        <div className="md:w-1/4 md:text-right text-gray-700">
          <Typography>
            {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(item.startDate)} - 
            {item.endDate
              ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(item.endDate)
              : currentlyWorkHere ? 'Present' : 'NA'}
          </Typography>
        </div>
      </div>
    ))}
  </Card>
    
  );
};

export default ExperienceDetails;
