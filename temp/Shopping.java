package net.codinghermit.api.model;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RedisHash("Shopping")
public class Shopping implements Serializable {
	@Id
	private int id;
	private String name;
	private long price;
}
