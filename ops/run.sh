(trap 'kill 0' SIGINT;
	cd ../backend/api/ &&
	./mvnw spring-boot:run &
	cd ../../frontend/client/ &&
	pnpm build && pnpm preview
)
