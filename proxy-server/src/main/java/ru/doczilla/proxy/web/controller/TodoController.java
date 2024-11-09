package ru.doczilla.proxy.web.controller;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TodoController {
    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/todos")
    public ResponseEntity<String> getAllTodos(
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) Integer offset) {
        String url = "https://todo.doczilla.pro/api/todos";

        String requestUrl = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("limit", limit)
                .queryParam("offset", offset)
                .toUriString();

        return restTemplate.exchange(requestUrl, HttpMethod.GET, HttpEntity.EMPTY, String.class);
    }

    @GetMapping("/todos/date")
    public ResponseEntity<String> getAllTodoInInterval(
            @RequestParam Integer from,
            @RequestParam Integer to,
            @RequestParam(required = false) Boolean status,
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) Integer offset) {
        String url = "https://todo.doczilla.pro/api/todos/date";

        String requestUrl = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("from", from)
                .queryParam("to", to)
                .queryParam("status", status)
                .queryParam("limit", limit)
                .queryParam("offset", offset)
                .toUriString();

        System.out.println(requestUrl);

        return restTemplate.exchange(requestUrl, HttpMethod.GET, HttpEntity.EMPTY, String.class);
    }

    @GetMapping("/todos/find")
    public ResponseEntity<String> findTodos(
            @RequestParam String q,
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) Integer offset) {
        String url = "https://todo.doczilla.pro/api/todos/find";

        String requestUrl = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("q", q)
                .queryParam("limit", limit)
                .queryParam("offset", offset)
                .toUriString();

        System.out.println(requestUrl);

        return restTemplate.exchange(requestUrl, HttpMethod.GET, HttpEntity.EMPTY, String.class);
    }
}
