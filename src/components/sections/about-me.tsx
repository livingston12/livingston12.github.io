import Image from 'next/image';

import LivingstonFullPose from '/public/images/livingston-full-pose.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[400px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={LivingstonFullPose}
              alt="Fullpose of Livingston"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a dedicated,{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              Senior Software Developer
            </Link>{' '}  with a profound expertise in .NET Core, JavaScript, and SQL,
            I thrive on transforming complex challenges into elegant, efficient solutions.
            With a career spanning multiple industries, including finance and consumer goods,
            I have consistently delivered high-impact projects that streamline operations, enhance user experiences, 
            and drive business growth.
          </Typography>
          <Typography>
            My journey began with a solid foundation in Information Systems Engineering from the Universidad Tecnológica de Santiago (UTESA), 
            which I have since augmented with continuous learning and professional development. Through platforms like Udemy and LinkedIn Learning, 
            I have acquired advanced skills in Microservices, RESTful APIs, and cutting-edge frontend frameworks like Vue.js and React.
            This commitment to learning has equipped me to tackle the evolving landscape of software development with agility and precision.
          </Typography>
          <Typography> You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              Github
            </Link>{' '}
            where I have all of my repos,, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              Linkedin
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Information Systems Engineering
              </Typography>
              <Typography component="li">Full Stack Developer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring Software Developer Lead</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
