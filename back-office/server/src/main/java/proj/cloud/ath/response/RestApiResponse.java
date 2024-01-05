package proj.cloud.ath.response;

public class RestApiResponse {
    private String message;
    private Object payload;
    private Integer status;

    public RestApiResponse() {
    }

    public RestApiResponse(Object payload, Integer status) {
        this.setPayload(payload);
        this.setStatus(status);
    }

    public String getMessage() {
        return message;
    }

    public Object getPayload() {
        return payload;
    }

    public Integer getStatus() {
        return status;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void setPayload(Object payload) {
        this.payload = payload;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
