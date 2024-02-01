package proj.cloud.ath.services.postgres;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proj.cloud.ath.entities.Category;
import proj.cloud.ath.repositories.postgres.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository repository;

    public Category findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Category> findAll() {
        return repository.findAll();
    }

    public Category save(Category category) {
        return repository.save(category);
    }

    public void delete(Long id) {
        Category category = this.findById(id);
        if (category == null) {
            return;
        }
        repository.delete(category);
    }
}
