#!/usr/bin/env bash

(trap 'kill 0' SIGINT;
	cd ../frontend/client/ &&
	pnpm dev &
	cd ../backend/api/ &&
	./mvnw spring-boot:run
)
