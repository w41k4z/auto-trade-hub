package proj.cloud.ath.controllers.api.v1;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import proj.cloud.ath.utils.Payload;

import jakarta.transaction.Transactional;
import proj.cloud.ath.entities.Announcement;
import proj.cloud.ath.entities.Announcement_picture;
import proj.cloud.ath.response.RestApiResponse;
import proj.cloud.ath.services.AnnouncementService;
import proj.cloud.ath.services.Announcement_pictureService;
import proj.cloud.ath.services.CommissionService;
import proj.cloud.ath.services.FileService;

@RestController
@RequestMapping("/api/v1/announcement")
public class AnnouncementController {

    @Autowired
    private CommissionService commissionService;

    @Autowired
    private AnnouncementService service;

    @Autowired
    private Announcement_pictureService announcement_pictureservice;

    @Autowired
    private FileService fileService;

    @GetMapping
    public RestApiResponse findAll() {
        return new RestApiResponse(service.findAll(), 200);
    }

    @GetMapping("/pending")
    public RestApiResponse findAllPendingAnnouncement() {
        return new RestApiResponse(service.findAllPendingAnnouncements(), 200);
    }

    @GetMapping("/{id}")
    public RestApiResponse findById(@PathVariable Long id) {
        return new RestApiResponse(service.findById(id), 200);
    }

    public List<String> uploadFiles(MultipartFile[] multipartFiles) {
        List<String> downloadUrls = new ArrayList<>();
        for (MultipartFile multipartFile : multipartFiles) {
            downloadUrls.add(fileService.upload(multipartFile));
        }
        return downloadUrls;
    }

    @Transactional
    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_OCTET_STREAM_VALUE })
    public RestApiResponse create(@RequestPart Payload py, @RequestPart MultipartFile[] files) throws IOException {
        RestApiResponse response = new RestApiResponse();
        Announcement announcement = py.getAnnouncement(commissionService);
        service.save(announcement);
        response.setPayload(announcement);
        List<String> downloadUrls = this.uploadFiles(files);
        for (int i = 0; i < downloadUrls.size(); i++) {
            Announcement_picture pic = new Announcement_picture(null, downloadUrls.get(i), 0, announcement.getId());
            announcement_pictureservice.save(pic);
        }
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
