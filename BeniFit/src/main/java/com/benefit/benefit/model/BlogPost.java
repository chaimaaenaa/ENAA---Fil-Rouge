package com.benefit.benefit.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "blog_posts")
public class BlogPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titre;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contenu;

    @Column(nullable = false)
    private LocalDateTime datePublication;

    @OneToMany(mappedBy = "blogPost", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments = new ArrayList<>();

    // Constructeurs
    public BlogPost() {
    }

    public BlogPost(String titre, String contenu) {
        this.titre = titre;
        this.contenu = contenu;
        this.datePublication = LocalDateTime.now();
    }

    // Getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public LocalDateTime getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(LocalDateTime datePublication) {
        this.datePublication = datePublication;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    // Méthodes utilitaires
    public void addComment(Comment comment) {
        comments.add(comment);
        comment.setBlogPost(this);
    }

    public void removeComment(Comment comment) {
        comments.remove(comment);
        comment.setBlogPost(null);
    }

    // equals() et hashCode()
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BlogPost blogPost = (BlogPost) o;
        return Objects.equals(id, blogPost.id) &&
                Objects.equals(titre, blogPost.titre) &&
                Objects.equals(datePublication, blogPost.datePublication);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, titre, datePublication);
    }

    // toString()
    @Override
    public String toString() {
        return "BlogPost{" +
                "id=" + id +
                ", titre='" + titre + '\'' +
                ", datePublication=" + datePublication +
                ", nombreCommentaires=" + comments.size() +
                '}';
    }
}