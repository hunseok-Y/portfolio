import Typewriter from "typewriter-effect";

export default function Title({ title }: { title: string }) {
	return (
		<>
			<div className="mt-auto">
				<Typewriter
					key={title}
					options={{
						autoStart: true,
						loop: false,
						delay: 50,
						// class 작성
						wrapperClassName: "text-white text-[60px]/[1.4] tracking-[-0.25rem] font-[700]",
					}}
					onInit={(typewriter) => {
						typewriter.typeString(title).start();
					}}
				/>
			</div>
		</>
	);
}
