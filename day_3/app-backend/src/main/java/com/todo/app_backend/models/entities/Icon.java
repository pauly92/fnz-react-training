package com.todo.app_backend.models.entities;

public enum Icon {
    CLOCK("Clock"),
    SHOPPINGCART("ShoppingCart"),
    WORK("Work");

    public final String label;

    Icon(String label) {
        this.label = label;
    }
}
