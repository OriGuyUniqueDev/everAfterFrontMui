/* eslint-disable @typescript-eslint/no-empty-interface */
import { Container, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import ContentWrapper from "../components/ContentWrapper";
import Grid from "@mui/material/Unstable_Grid2";
import StarIcon from "@mui/icons-material/Star";

interface AboutSectionProps {}

const AboutSection: FunctionComponent<AboutSectionProps> = () => {
	return (
		<ContentWrapper alignItemsPosition={""}>
			<Grid container spacing={0}>
				<Grid xs={12} md={8}>
					<Typography variant="h3" sx={{ mt: 4 }}>
						About Ori Guy,
					</Typography>
					<Typography fontSize={18} variant="body2" sx={{ mb: 4 }}>
						Full Stack Developer{" "}
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						I am a Proficient Full Stack Developer with a Passion for Coding and an "Out of the Box" Approach
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						I am a proficient Full Stack Developer, with exceptional programming capabilities and profound technological expertise. I approach various programming challenges with utmost zeal and enthusiasm, always striving for innovative solutions.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						Recently graduated from HackerU College, I have completed several practical full-stack projects, showcasing my knowledge and raw talent. Now, I am ready to embark on my journey as a professional developer, eager to apply my skills and continue growing.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						My expertise spans across backend development languages like JavaScript (Node.js) and frontend development languages such as HTML, CSS, Angular, React.js, and Vue3 (which I independently mastered). Additionally, I possess a deep understanding of UI/UX concepts, collaborating with talented web designers to create new and user-friendly websites.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						In addition to my technical skills, I bring an extensive background in customer service and technical support. My experience in these areas enables me to lead professional personnel by example and motivate them to embrace great challenges. Furthermore, I have successfully planned and built training programs and courses covering all aspects of customer support and service, supporting representatives and professional personnel.
					</Typography>
					<Typography variant="h4" sx={{ mt: 4, mb: 6, textDecoration: "underline" }}>
						Accomplishments:
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						<StarIcon /> Graduated as a proficient full-stack developer, building an outstanding portfolio and gaining practical experience in various JavaScript libraries.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						<StarIcon /> Demonstrated exceptional management skills, leading professional personnel and managing cross-organizational projects.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						<StarIcon /> Designed and developed training programs and courses in customer support and service, imparting professional knowledge to support reps and professional personnel.
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						By leveraging my technical skills, management background, and customer service expertise, I am well-equipped to contribute to projects and excel in a professional developer role. I am passionate about continual learning and always seeking opportunities to expand my knowledge.
					</Typography>
				</Grid>
			</Grid>
		</ContentWrapper>
	);
};

export default AboutSection;
