package models

import "github.com/jinzhu/gorm"

type Person struct {
	gorm.Model
	Name string `json:"name"`
	Age int64	`json:"age"`
}
