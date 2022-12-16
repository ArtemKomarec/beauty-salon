export const HeaderLogo = ({ width, height, color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 1447 306"
			fill="none"
		>
			<path
				d="M4 301.965V79.335c.02-19.98 8.333-39.137 23.114-53.262C41.894 11.948 61.934 4.01 82.833 4c19.483-.005 38.277 6.892 52.754 19.358l49.855 42.835 49.076-42.232C249.456 11.106 268.845 3.995 288.943 4v0c21.578 0 42.272 8.195 57.53 22.783 15.257 14.587 23.829 34.373 23.829 55.002V302l-44.58-.32c-15.272 0-29.919-5.8-40.718-16.125-10.798-10.324-16.865-24.327-16.865-38.928V83.774c0-7.931 3.295-15.538 9.162-21.147 5.866-5.608 13.822-8.759 22.118-8.759v0a32.53 32.53 0 0 1 11.982 2.266c3.8 1.501 7.253 3.703 10.161 6.48a29.845 29.845 0 0 1 6.79 9.708 28.759 28.759 0 0 1 2.385 11.453v0a41.377 41.377 0 0 1-3.874 17.494c-2.56 5.507-6.303 10.438-10.986 14.472L185.405 227.766 55.193 115.777c-4.677-4.039-8.416-8.971-10.976-14.477a41.48 41.48 0 0 1-3.884-17.49v0c0-3.93.81-7.822 2.385-11.453a29.856 29.856 0 0 1 6.79-9.707 31.417 31.417 0 0 1 10.16-6.48c3.8-1.501 7.872-2.271 11.983-2.267v0c4.108 0 8.175.774 11.97 2.277a31.417 31.417 0 0 1 10.148 6.483 29.849 29.849 0 0 1 6.781 9.702 28.77 28.77 0 0 1 2.381 11.445v162.781c0 14.601-6.066 28.604-16.865 38.929-10.8 10.325-25.446 16.125-40.718 16.125v0L4 301.965Z"
				stroke={color}
				strokeWidth={8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="m487.218 162.625-51.95-113.854V171.85c0 5.826 1.78 10.924 5.341 15.293 3.722 4.37 8.496 7.04 14.322 8.011 1.133.162 2.428.243 3.885.243h.242c4.855 0 9.225-1.295 13.109-3.884 3.884-2.751 6.636-6.312 8.254-10.681l6.555-18.693.242.486ZM433.326 49.014c0-2.752-.971-5.098-2.913-7.04-1.942-1.942-4.208-2.913-6.797-2.913h-1.7v-1.457h43.94l36.656 80.353 21.12-59.718 1.214-3.156v-.243l4.127-11.41 1.942-5.826h38.841v1.457c-3.398 0-6.231.89-8.496 2.67-2.104 1.618-3.156 4.046-3.156 7.283V195.64c0 6.312 3.884 9.467 11.652 9.467v1.214h-52.193v-1.214c7.607 0 11.41-3.155 11.41-9.467V48.771l-25.49 72.099-26.218 74.042c-2.751 7.93-8.415 12.623-16.993 14.08a20.918 20.918 0 0 1-7.768 0c-8.254-1.457-13.999-5.988-17.236-13.595-1.295-2.751-1.942-5.745-1.942-8.982V49.014Zm267.806-11.41 54.378 159.492c.324.971.809 1.943 1.457 2.914 2.427 3.398 5.745 5.097 9.953 5.097h2.185v1.214h-42.24l-9.468-27.674-4.37-12.866-11.409-33.258h-18.207c-5.665 0-10.115 2.265-13.352 6.797-3.237 4.531-3.884 9.468-1.942 14.808l6.555 18.45c2.265 6.635 2.913 12.623 1.942 17.964-.81 4.855-2.913 8.901-6.312 12.138-4.532 4.531-10.439 6.797-17.721 6.797-7.121 0-12.948-2.266-17.479-6.797-3.399-3.237-5.503-7.283-6.312-12.138-.971-5.341-.324-11.329 1.942-17.964l41.755-117.495c.809-2.59.809-5.098 0-7.526v-.485c-.486-1.133-1.052-2.104-1.7-2.914-2.265-3.398-5.502-5.097-9.71-5.097h-2.185v-1.457h42.24Zm-43.211 92.977h43.211l-26.46-76.712-39.57 111.912c-1.942 5.34-2.509 10.195-1.699 14.565.647 4.046 2.265 7.364 4.855 9.953 3.884 3.723 8.658 5.584 14.323 5.584 5.826 0 10.681-1.861 14.565-5.584 2.589-2.589 4.208-5.826 4.855-9.71.809-4.37.243-9.306-1.699-14.808l-12.381-35.2Zm217.463-91.035c-7.769 0-11.653 3.156-11.653 9.468v155.608h8.74c10.519 0 18.125-.486 22.819-1.457 4.046-1.132 7.606-2.832 10.681-5.098 3.075-2.427 5.826-5.745 8.254-9.953 2.428-4.207 4.855-9.71 7.283-16.507h1.942l-12.138 34.714h-88.121v-1.214c3.236 0 5.907-.809 8.011-2.427 2.265-1.78 3.398-4.289 3.398-7.526V49.014c0-6.312-3.803-9.468-11.409-9.468v-1.942h52.193v1.942Zm103.987-1.942h52.189v1.457c-3.39 0-6.23.89-8.49 2.67-2.11 1.618-3.16 4.046-3.16 7.283V195.64c0 6.312 3.89 9.467 11.65 9.467v1.214h-52.189v-1.214c7.607 0 11.41-3.155 11.41-9.467V49.014c0-2.266-.566-4.127-1.699-5.584-.971-1.618-2.347-2.751-4.127-3.398-1.618-.648-3.48-.971-5.584-.971v-1.457Zm113.269 0h40.79l48.31 75.741-18.45 52.436c-1.95 5.34-2.59 10.195-1.95 14.565.65 4.046 2.35 7.364 5.1 9.953 3.89 3.723 8.82 5.584 14.81 5.584 5.99-.162 10.84-2.185 14.57-6.069 2.26-2.59 3.72-5.665 4.37-9.225V49.014c0-2.752-.98-5.098-2.92-7.04-1.94-1.942-4.29-2.913-7.04-2.913h-1.45v-1.457h24.76v1.457h-1.7c-1.78 0-3.48.485-5.1 1.456-1.46.81-2.59 2.023-3.4 3.641-.81 1.457-1.21 3.075-1.21 4.856v134.002a15.732 15.732 0 0 0 2.67 8.011c-.81 4.208-2.59 7.769-5.34 10.682-4.05 4.37-9.23 6.878-15.54 7.525-6.15.81-11.89-.485-17.24-3.884-5.34-3.398-8.65-8.334-9.95-14.808-.97-5.341-.24-11.329 2.19-17.964l9.22-26.218-62.15-97.589v146.383c0 2.752.89 5.098 2.68 7.04 1.94 1.942 4.28 2.913 7.04 2.913h1.69v1.214h-24.76v-1.214h1.7c2.75 0 5.02-.971 6.8-2.913 1.94-1.942 2.91-4.288 2.91-7.04V49.014c0-2.752-.97-5.098-2.91-7.04-1.78-1.942-4.05-2.913-6.8-2.913h-1.7v-1.457Zm251.94 0 54.38 159.492c.33.971.81 1.943 1.46 2.914 2.43 3.398 5.74 5.097 9.95 5.097h2.19v1.214h-42.24l-9.47-27.674-4.37-12.866-11.41-33.258h-18.21c-5.66 0-10.11 2.265-13.35 6.797-3.24 4.531-3.88 9.468-1.94 14.808l6.55 18.45c2.27 6.635 2.92 12.623 1.95 17.964-.81 4.855-2.92 8.901-6.32 12.138-4.53 4.531-10.43 6.797-17.72 6.797-7.12 0-12.94-2.266-17.48-6.797-3.39-3.237-5.5-7.283-6.31-12.138-.97-5.341-.32-11.329 1.94-17.964l41.76-117.495c.81-2.59.81-5.098 0-7.526v-.485c-.49-1.133-1.05-2.104-1.7-2.914-2.27-3.398-5.5-5.097-9.71-5.097h-2.19v-1.457h42.24Zm-43.21 92.977h43.21l-26.46-76.712-39.57 111.912c-1.94 5.34-2.5 10.195-1.69 14.565.64 4.046 2.26 7.364 4.85 9.953 3.88 3.723 8.66 5.584 14.32 5.584 5.83 0 10.68-1.861 14.57-5.584 2.59-2.589 4.21-5.826 4.85-9.71.81-4.37.25-9.306-1.7-14.808l-12.38-35.2ZM466.683 230.563v24.263H432.62v-24.263h-5.754V285h5.754v-25.119h34.063V285h5.677v-54.437h-5.677ZM530.8 285h6.066l-24.885-54.437h-5.678L481.418 285h5.988l6.532-14.543h30.33L530.8 285Zm-34.762-19.209 13.065-29.24 13.065 29.24h-26.13ZM545.871 285h5.755v-54.437h-5.755V285Zm66.94 0-13.299-18.664c7.933-2.567 12.443-8.555 12.443-17.109 0-11.665-8.399-18.664-22.241-18.664h-20.375V285h5.754v-17.264h14.621c1.555 0 2.955-.078 4.355-.234L606.511 285h6.3Zm-23.253-22.164h-14.465V235.54h14.465c10.888 0 16.642 4.977 16.642 13.687 0 8.554-5.754 13.609-16.642 13.609Zm62.088 17.187v-20.22h28.152v-4.899h-28.152V235.54h31.574v-4.977h-37.329V285h38.495v-4.977h-32.74ZM738.058 285l-20.764-28.152 19.287-26.285h-6.222l-16.331 22.241-16.409-22.241h-6.61l19.364 26.441L689.687 285h6.61l17.498-23.952L731.37 285h6.688Zm18.429 0h5.755v-49.46h19.131v-4.977h-44.017v4.977h19.131V285Zm39.834-4.977v-20.22h28.152v-4.899h-28.152V235.54h31.574v-4.977h-37.328V285h38.495v-4.977h-32.741Zm86.085-49.46v44.172l-35.073-44.172h-4.744V285h5.755v-44.172L883.339 285h4.744v-54.437h-5.677Zm38.454 54.904c13.921 0 20.298-6.844 20.298-14.854 0-19.831-33.518-10.81-33.518-25.741 0-5.444 4.433-9.877 14.387-9.877 4.821 0 10.265 1.478 14.931 4.511l1.944-4.588c-4.355-3.033-10.731-4.822-16.875-4.822-13.843 0-20.064 6.921-20.064 14.931 0 20.142 33.518 10.966 33.518 25.897 0 5.366-4.433 9.643-14.621 9.643-7.154 0-14.076-2.799-17.964-6.61l-2.255 4.433c4.044 4.199 12.054 7.077 20.219 7.077Zm32.837-.467h5.754v-54.437h-5.754V285Zm47.263.467c16.33 0 28.54-11.743 28.54-27.686 0-15.942-12.21-27.685-28.54-27.685-16.486 0-28.618 11.821-28.618 27.685 0 15.865 12.132 27.686 28.618 27.686Zm0-5.133c-13.142 0-22.941-9.566-22.941-22.553s9.799-22.552 22.941-22.552c13.07 0 22.79 9.565 22.79 22.552s-9.72 22.553-22.79 22.553Zm81.26-49.771v44.172l-35.08-44.172h-4.74V285h5.76v-44.172L1083.15 285h4.74v-54.437h-5.67Zm58.81 54.904c13.92 0 20.29-6.844 20.29-14.854 0-19.831-33.52-10.81-33.52-25.741 0-5.444 4.44-9.877 14.39-9.877 4.82 0 10.27 1.478 14.93 4.511l1.95-4.588c-4.36-3.033-10.73-4.822-16.88-4.822-13.84 0-20.06 6.921-20.06 14.931 0 20.142 33.52 10.966 33.52 25.897 0 5.366-4.44 9.643-14.62 9.643-7.16 0-14.08-2.799-17.97-6.61l-2.25 4.433c4.04 4.199 12.05 7.077 20.22 7.077Zm42.65-.467h5.75v-49.46h19.13v-4.977h-44.01v4.977h19.13V285Zm54.94.467c13.93 0 22.32-8.088 22.32-23.72v-31.184h-5.59v30.951c0 12.91-6.07 18.82-16.73 18.82-10.57 0-16.64-5.91-16.64-18.82v-30.951h-5.75v31.184c0 15.632 8.47 23.72 22.39 23.72Zm39.67-.467h22.16c17.42 0 29.16-11.199 29.16-27.219 0-16.02-11.74-27.218-29.16-27.218h-22.16V285Zm5.75-4.977V235.54h16.1c14.46 0 23.8 9.176 23.8 22.241s-9.34 22.242-23.8 22.242h-16.1Zm58.5 4.977h5.75v-54.437h-5.75V285Zm47.26.467c16.33 0 28.54-11.743 28.54-27.686 0-15.942-12.21-27.685-28.54-27.685-16.49 0-28.62 11.821-28.62 27.685 0 15.865 12.13 27.686 28.62 27.686Zm0-5.133c-13.14 0-22.94-9.566-22.94-22.553s9.8-22.552 22.94-22.552c13.06 0 22.79 9.565 22.79 22.552s-9.73 22.553-22.79 22.553Z"
				fill={color}
			/>
		</svg>
	);
};