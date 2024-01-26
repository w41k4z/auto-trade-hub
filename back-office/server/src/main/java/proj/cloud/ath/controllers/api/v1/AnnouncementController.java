package proj.cloud.ath.controllers.api.v1;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.transaction.Transactional;
import proj.cloud.ath.entities.Announcement;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.AnnouncementService;
import proj.cloud.ath.services.Announcement_pictureService;
import com.google.firebase.storage.FirebaseStorage;

@RestController
@RequestMapping("/api/v1/announcement")
public class AnnouncementController {

    @Autowired
    private AnnouncementService service;

    @Autowired
    private Announcement_pictureService announcement_pictureservice;

    @Autowired
    private FirebaseStorage storage;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    private File convertToFile(MultipartFile multipartFile) throws IOException {
        File file = new File(multipartFile.getOriginalFilename());
        multipartFile.transferTo(file);
        return file;
    }


    public List<String> uploadFiles(MultipartFile[] multipartFiles) throws IOException {
        List<String> downloadUrls = new ArrayList()<>();
        for (MultipartFile multipartFile : multipartFiles) {
            File file = convertToFile(multipartFile);
            String downloadUrl = uploadFile(storage, file, multipartFile.getOriginalFilename());
            downloadUrls.add(downloadUrl);
        }
        return downloadUrls;
    }

    public void getConnection() throws IOException{
        FileInputStream serviceAccount = new FileInputStream("path/to/serviceAccountKey.json");
        FirebaseOptions options = new FirebaseOptions.Builder().setCredentials(GoogleCredentials.fromStream(serviceAccount)).setDatabaseUrl("https://yourproject.firebaseio.com").build();
        FirebaseApp.initializeApp(options);
    }

        private String uploadFile(FirebaseStorage storage, File file, String fileName) throws IOException {
            String path = "/" + fileName;
            StorageReference storageRef = storage.getReference().child(path);
            uploadTask uploadTask = storageRef.putFile(Uri.fromFile(file));
            Uri downloadUrl = null;
            try {
                Tasks.await(uploadTask);
                downloadUrl = storageRef.getDownloadUrl();
            } catch (Exception e) {
                throw new IOException("Failed to upload file", e);
            }
            return downloadUrl.toString();
        }

    @Transactional
    @PostMapping
    public RestApiResponse create(@RequestBody Announcement announcement,@RequestParam("files") MultipartFile[] multipartFiles)throws IOException {
        RestApiResponse response = new RestApiResponse();
        service.save(announcement);
        response.setPayload(announcement);
        response.setStatus(201);
        return response;
    }

    @DeleteMapping("/{id}")
    public RestApiResponse delete(@PathVariable Long id) {
        RestApiResponse response = new RestApiResponse();
        service.delete(id);
        response.setStatus(200);
        return response;
    }
}
