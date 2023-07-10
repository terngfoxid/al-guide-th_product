export const AutoConvertText: React.FC<{
  children: string;
  style?: React.CSSProperties;
  className?: string;
}> = function ({ children, className }) {

//convert position to link
let newStr = children.replace("กองหน้า",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/guide_newbie/basic_formation">กองหน้า</a>')
newStr = newStr.replace("กองหลัง",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/guide_newbie/basic_formation">กองหลัง</a>')

//convert faction to link
newStr = newStr.replace("Eagle Union",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Eagle Union">Eagle Union</a>')
newStr = newStr.replace("Royal Navy",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Royal Navy">Royal Navy</a>')
newStr = newStr.replace("Sakura Empire",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Sakura Empire">Sakura Empire</a>')
newStr = newStr.replace("Iron Blood",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Iron Blood">Iron Blood</a>')
newStr = newStr.replace("Dragon Empery",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Dragon Empery">Dragon Empery</a>')
newStr = newStr.replace("Northern Parliament",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Northern Parliament">Northern Parliament</a>')
newStr = newStr.replace("Iris Libre",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Iris Libre">Iris Libre</a>')
newStr = newStr.replace("Vichya Dominion",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Vichya Dominion">Vichya Dominion</a>')
newStr = newStr.replace("Sardegna Empire",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/faction/Sardegna Empire">Sardegna Empire</a>')

//retrofit link
newStr = newStr.replace("แปลน Retrofit Destroyer",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/guide_newbie/retrofit">แปลน Retrofit Destroyer</a>')
newStr = newStr.replace("แปลน Retrofit Cruiser",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/guide_newbie/retrofit">แปลน Retrofit Cruiser</a>')
newStr = newStr.replace("แปลน Retrofit Battleship",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/guide_newbie/retrofit">แปลน Retrofit Battleship</a>')
newStr = newStr.replace("แปลน Retrofit Carrier",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/guide_newbie/retrofit">แปลน Retrofit Carrier</a>')

//convert some special text to link
newStr = newStr.replace("Tech",'<a class="mx-1 px-1 rounded-md hover:text-sky-400 hover:bg-zinc-500/[0.5]" href="/guide_newbie/tech">Tech</a>')

  return (
    <p className={className} dangerouslySetInnerHTML={{__html: newStr}}></p>
  );
};
