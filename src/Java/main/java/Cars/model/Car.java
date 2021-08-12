package Cars.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Cars.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Car
 */
@Entity(name = "Car")
@Table(schema = "public", name = "Car")
public class Car {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "model")
    private String model;

    @Column(name = "color")
    private String color;

    @Column(name = "speed")
    private Integer speed;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Driver")
    @Convert("Driver")
    @Column(name = "Driver_m0", length = 16, unique = true, nullable = false)
    private UUID _driverid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Driver", insertable = false, updatable = false)
    private Driver driver;


    public Car() {
        super();
    }

    public void setPrimarykey(UUID primaryKey) {
        this.primarykey = primaryKey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

     public String getmodel() {
        return model;
    }

     public void setmodel(String model) {
        this.model = model;
    }

     public String getcolor() {
        return color;
    }

     public void setcolor(String color) {
        this.color = color;
    }

     public Integer getspeed() {
        return speed;
    }

     public void setspeed(Integer speed) {
        this.speed = speed;
    }

}
