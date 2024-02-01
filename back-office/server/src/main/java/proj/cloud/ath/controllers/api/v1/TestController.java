package proj.cloud.ath.controllers.api.v1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proj.cloud.ath.models.Test;
import proj.cloud.ath.repositories.mongo.TestRepository;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    @Autowired
    private TestRepository repository;

    @GetMapping
    public List<Test> read() {
        return repository.findAll();
    }
}
