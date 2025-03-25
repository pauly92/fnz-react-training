package com.todo.app_backend.models.entities;

public enum Icon {
    ADDALARM("AddAlarm"),
    BEACHACCESS("BeachAccess"),
    CLOCK("Clock"),
    FITNESSCENTER("FitnessCenter"),
    FORMATLISTBULLETED("FormatListBulleted"),
    SHOPPINGCART("ShoppingCart"),
    WORK("Work");


    public final String label;

    Icon(String label) {
        this.label = label;
    }
}
