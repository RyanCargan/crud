sudo docker run --network="host" --name optimized_keycloak -p 8443:8443 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=change_me prebuilt_keycloak start --optimized
