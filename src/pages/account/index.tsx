import { memo, useEffect, useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { removeToken } from "../../lib/features/authSlice";

const Account = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("");
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeToken());
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    api
      .get("/auth/me")
      .then((res) => setUser(res.data))
      .catch((err) => {
        const msg = err?.response?.data?.message ?? "Failed to load profile";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  // skeleton section
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="text-center py-8">
          <div className="h-10 w-40 bg-gray-300 rounded-lg mx-auto "></div>
        </div>

        <div className="max-w-7xl mx-auto pb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-[262px] h-[498px]">
              <div className="bg-[#F3F5F7] rounded-lg h-full p-6 flex flex-col items-center ">
                <div className="w-[82px] h-[82px] bg-gray-300 rounded-full mb-6"></div>
                <div className="h-6 w-32 bg-gray-300 rounded mb-6"></div>
                <div className="space-y-4 w-full">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="h-5 w-3/4 bg-gray-300 rounded mx-auto"
                      ></div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex-1 mr-[79px]">
              <div className="space-y-8">
                <div>
                  <div className="h-6 w-40 bg-gray-300 rounded mb-6 "></div>
                  <div className="border border-gray-300 rounded-lg p-4 space-y-4">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="h-10 bg-gray-200 rounded "
                        ></div>
                      ))}
                  </div>
                </div>

                <div>
                  <div className="h-6 w-56 bg-gray-300 rounded mb-6 "></div>
                  <div className="border border-gray-300 rounded-lg p-4 space-y-4">
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="h-10 bg-gray-200 rounded "
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-foreground">My Account</h1>
      </div>

      <div className="max-w-7xl mx-auto pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-[262px] h-[498px]">
            <div className="bg-muted rounded-lg h-full bg-[#F3F5F7]">
              <div className="text-center">
                <div className="relative inline-block  mt-[40px]">
                  <div className="rounded-full  bg-amber-400">
                    <img
                      src={user.image}
                      width={82}
                      height={82}
                      alt="Sofia Havertz"
                    />
                  </div>
                </div>
                <h2 className="text-[20px] leading-[32px] font-semibold text-foreground mb-[40px]">
                  {user.firstName} {user.lastName}
                </h2>
              </div>

              <nav className="w-[230px] px-[16px]">
                {["Account", "Address", "Orders", "Wishlist"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] transition-colors ${
                      activeTab == tab
                        ? "text-[#141718] border-b border-[#141718]"
                        : "text-[#6C7275] "
                    }`}
                  >
                    {tab}
                  </button>
                ))}

                <button
                  onClick={handleLogOut}
                  // disabled
                  className="block w-full text-left mt-[12px] font-semibold text-[16px] leading-[26px] py-[8px] text-[#6C7275] hover:text-foreground transition-colors"
                >
                  Log Out
                </button>
              </nav>
            </div>
          </div>

          {/* main content */}
          <div className="flex-1 mr-[79px]">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Account Details
                </h2>
                <div className="border border-gray-300 rounded-lg p-4 space-y-4 text-left">
                  <div className="py-[7px] px-[16px]">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      First Name *
                    </p>
                    <p className="text-foreground">{user.firstName}</p>
                  </div>

                  <div className="py-[7px] px-[16px]">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Last Name *
                    </p>
                    <p className="text-foreground">{user.lastName}</p>
                  </div>

                  <div className="py-[7px] px-[16px]">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Username *
                    </p>
                    <p className="text-foreground">{user.username}</p>
                  </div>

                  <div className="py-[7px] px-[16px]">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Email *
                    </p>
                    <p className="text-foreground">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* other informations  */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Other informations
                </h2>
                <div className="border border-gray-300 rounded-lg p-4 space-y-4 text-left">
                  <div className="py-[7px] px-[16px]">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Password
                    </p>
                    <p className="text-foreground">{user.password}</p>
                  </div>

                  <div className="py-[7px] px-[16px]">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Phone number
                    </p>
                    <p className="text-foreground">{user.phone}</p>
                  </div>

                  <div className="py-[7px] px-[16px]">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      Birthdate
                    </p>
                    <p className="text-foreground">{user.birthDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Account);
