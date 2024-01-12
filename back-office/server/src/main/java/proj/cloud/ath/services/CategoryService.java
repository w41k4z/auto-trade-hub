package proj.cloud.ath.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Category;
import proj.cloud.ath.repositories.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository repository;

    public Category findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Category> findAll() {
        Category category = new Category();
        category.setState(0);
        return repository.findAll(Example.of(category));
    }

    public Category save(Category category) {
        return repository.save(category);
    }

    public void delete(Long id) {
        Category category = this.findById(id);
        if (category == null) {
            return;
        }
        category.setState(-1);
        this.save(category);
    }    
}
