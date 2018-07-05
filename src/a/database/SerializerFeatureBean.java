package a.database;

import java.io.IOException;

import org.mapdb.DataInput2;
import org.mapdb.DataOutput2;
import org.mapdb.Serializer;

public class SerializerFeatureBean implements Serializer<FeatureBean>{

	public void serialize(DataOutput2 out, FeatureBean value) throws IOException {
//		System.out.println("serialize");
		byte[] bytes = ProtostuffUtil.serializer(value);
		out.write(bytes);
	}

	public FeatureBean deserialize(DataInput2 input, int available) throws IOException {
//		System.out.println("deserialize");
//		System.out.println("available: " + available);
		byte[] bytes = new byte[available];
		input.readFully(bytes);
		FeatureBean feature = ProtostuffUtil.deserializer(bytes, FeatureBean.class);
		return feature;
	}

}
