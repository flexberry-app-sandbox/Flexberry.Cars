package Cars.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Cars.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Driver
 */
@Entity(name = "Driver")
@Table(schema = "public", name = "Driver")
public class Driver {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Integer age;


    public Driver() {
        super();
    }

    public void setPrimarykey(UUID primaryKey) {
        this.primarykey = primaryKey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

     public String getname() {
        return name;
    }

     public void setname(String name) {
        this.name = name;
    }

     public Integer getage() {
        return age;
    }

     public void setage(Integer age) {
        this.age = age;
    }

}
