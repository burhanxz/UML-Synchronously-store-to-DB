package a.database;

import java.io.IOException;

import org.mapdb.DataInput2;
import org.mapdb.DataOutput2;
import org.mapdb.Serializer;

public class SerializerClassBean implements Serializer<ClassBean>{

	@Override
	public void serialize(DataOutput2 out, ClassBean value) throws IOException {
		byte[] bytes = ProtostuffUtil.serializer(value);
		out.write(bytes);
		
	}

	@Override
	public ClassBean deserialize(DataInput2 input, int available) throws IOException {
		byte[] bytes = new byte[available];
		input.readFully(bytes);
		ClassBean clazz = ProtostuffUtil.deserializer(bytes, ClassBean.class);
		return clazz;
	}

}
