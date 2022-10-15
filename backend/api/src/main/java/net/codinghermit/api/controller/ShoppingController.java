package net.codinghermit.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.codinghermit.api.model.Shopping;
import net.codinghermit.api.repo.ShoppingDao;


@RestController
@RequestMapping("/shoppingItems")
public class ShoppingController {

	@Autowired
	private ShoppingDao shoppingdao;

	@PostMapping
	public Shopping save(@RequestBody Shopping shopping) {
		return shoppingdao.save(shopping);
	}

	@PutMapping("/{id}")
	@CachePut(key="#id", value ="Shopping")
	public Shopping updateShop(@PathVariable int id, @RequestBody Shopping shopping) {
		Shopping s1 = shoppingdao.findProductById(id);
						s1.setName(shopping.getName());
		final Shopping updateds1 = shoppingdao.save(s1);
		return updateds1;

	}

	@GetMapping
	public List<Shopping> getAllProducts() {
		return shoppingdao.findAll();
	}

	@GetMapping("/{id}")
	@Cacheable(key="#id", value ="Shopping")
	public Shopping findItems(@PathVariable int id) {
		return shoppingdao.findProductById(id);
	}
	@DeleteMapping("/{id}")
	@CacheEvict(key="#id", value ="Shopping")
	public String remove(@PathVariable int id)   {
		return shoppingdao.deleteProduct(id);
	}
}
